<template>
  <div class="job-form position-relative">
    <b-form id="job-form">
      <p>
        Bitte beachten Sie, dass mit * gekennzeichete Felder ausgefüllt werden
        müssen.
      </p>
      <label for="title" required>Titel</label>
      <b-form-input
        id="title"
        v-model="job.title"
        type="text"
        lazy-formatter
        :formatter="formatter"
        :state="
          validated
            ? job.title && job.title.length <= 155
              ? true
              : false
            : null
        "
        aria-describedby="title-help title-feedback"
        placeholder="z.B. Praxismanagerin (m/w/d) für hausärztliche Gemeinschaftspraxis"
        required
        trim
      />
      <b-form-invalid-feedback id="title-feedback" class="ml-2">
        Bitte nutzen Sie maximal 155 Zeichen.
      </b-form-invalid-feedback>
      <b-form-text id="title-help" class="ml-2"
        ><span :class="[{ 'text-danger': job.title.length > 155 }]">
          {{ 155 - job.title.length }} Zeichen verfügbar</span
        ></b-form-text
      >

      <div
        v-if="$store.state.auth.user.isAdmin"
        class="bg-light-shade border-radius1 p-3 mt-3"
      >
        <h6>ADMIN</h6>
        <label for="user-id">User ID</label>
        <b-form-input
          id="user-id"
          v-model="job.userId._id"
          type="text"
          placeholder="User ID eingeben..."
          trim
          required
        />
        <label for="published-at">publishedAt</label>
        <BFormDatepicker
          v-model="publishedAt"
          placeholder="Veröffentlicht am..."
        />
        <label class="mt-2" for="paid-expires-at">paidExpiresAt</label>
        <BFormDatepicker
          v-model="paidExpiresAt"
          placeholder="Zahlung läuft ab am..."
        />
        <label class="mt-2" for="refresh-frequency">refreshFrequency</label>
        <b-form-input
          v-model="job.refreshFrequency"
          type="number"
          number
          placeholder="Anzeige wird nach X Tagen aktualisiert..."
        />
        <label for="video-url">Video URL</label>
        <b-form-input
          id="video-url"
          v-model="job.videoUrl"
          type="text"
          placeholder="Video URL eingeben..."
          trim
        />
        <label for="no-location">noLocation</label>
        <b-form-select id="no-location" v-model="job.company.noLocation">
          <b-form-select-option :value="true">ja</b-form-select-option>
          <b-form-select-option :value="false">nein</b-form-select-option>
        </b-form-select>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="employment-type" required>Anstellungsart</label>
          <b-form-select
            id="employment-type"
            v-model="job.employmentType"
            :state="validated ? (job.employmentType ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Anstellungsart wählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in employmentTypeOptions"
              :key="type.value"
              :value="type.value"
              >{{ type.text }}</b-form-select-option
            ></b-form-select
          >
        </div>
        <div class="col-12 col-lg-4">
          <label for="profession">Berufsgruppe</label>
          <b-form-select
            id="profession"
            v-model="job.profession"
            :state="validated ? true : null"
          >
            <b-form-select-option value=""
              >-- Alle Berufsgruppen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in professionOptions"
              :key="type.value"
              :value="type.value"
              >{{ type.text }}</b-form-select-option
            ></b-form-select
          >
        </div>
        <div class="col-12 col-lg-4">
          <label for="specialization">Fachbereich Schwerpunkt</label>
          <b-form-select
            id="specialization"
            v-model="job.specialization"
            :state="validated ? true : null"
          >
            <b-form-select-option value=""
              >-- Fachbereich wählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="type in specializationOptions"
              :key="type"
              :value="type"
              >{{ type }}</b-form-select-option
            ></b-form-select
          >
        </div>
        <!-- <div class="col-12 col-lg-4">
          <label for="application-deadline">Bewerbungsfrist</label>
          <BFormDatepicker
            id="application-deadline"
            v-model="applicationDeadline"
            :state="validated ? true : null"
            placeholder="Bewerbungsfrist wählen"
            :reset-button="true"
            :reset-value="''"
            label-reset-button="Zurücksetzen"
            label-help=""
            start-weekday="1"
            aria-describedby="application-deadline-help"
          />
          <b-form-text id="application-deadline-help" class="ml-2"
            >Stellenanzeige geht nach diesem Datum automatisch
            offline</b-form-text
          >
        </div> -->
      </div>

      <label for="description" required>Stellenbeschreibung</label>
      <TipTapEditor
        :validated="validated"
        :content="job.description"
        @update-content="job.description = $event"
      />

      <div class="row">
        <div class="col-12 col-lg-4">
          <label
            for="simple-application"
            class="bg-secondary text-light border-radius1 px-1"
            >Kurzbewerbungen aktivieren</label
          >
          <b-form-select
            id="simple-application"
            v-model="job.simpleApplication"
            :state="validated ? true : null"
          >
            <b-form-select-option
              v-for="type in simpleApplicationOptions"
              :key="type.value"
              :value="type.value"
              >{{ type.text }}</b-form-select-option
            ></b-form-select
          >
          <b-form-text id="simple-application-help" class="ml-2"
            >beliebt & sehr empfohlen (erhöht Bewerberzahl) <br />
            <b-link to="/fuer-arbeitgeber#kurzbewerbung" target="_blank"
              >mehr erfahren<svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg></b-link
          ></b-form-text>
        </div>
        <div class="w-100"></div>
        <div class="col-12 col-lg-6">
          <label for="application-email" :required="job.simpleApplication"
            >E-Mail Adresse für Bewerbungen</label
          >
          <b-input-group>
            <template #prepend>
              <b-input-group-text>@</b-input-group-text>
            </template>
            <b-form-input
              id="application-email"
              v-model="job.applicationEmail"
              type="email"
              lazy-formatter
              :formatter="formatter"
              :state="
                validated
                  ? job.applicationEmail
                    ? true
                    : (!job.applicationEmail && !job.extJobUrl) ||
                      (job.simpleApplication && !job.applcationEmail)
                    ? false
                    : null
                  : null
              "
              placeholder="karriere@ihr-unternehmen.de"
              aria-describedby="application-email-feedback"
            />
          </b-input-group>
          <b-form-invalid-feedback
            id="application-email-feedback"
            :state="
              validated
                ? job.applicationEmail
                  ? true
                  : (!job.applicationEmail && !job.extJobUrl) ||
                    (job.simpleApplication && !job.applcationEmail)
                  ? false
                  : null
                : null
            "
            class="ml-2"
          >
            <span v-if="job.simpleApplication && !job.applcationEmail"
              >Bitte E-Mail Adresse für Bewerbungen bzw. Kurzbewerbungen
              angeben.</span
            >
            <span v-else-if="!job.applicationEmail && !job.extJobUrl"
              >Bitte E-Mail Adresse für Bewerbungen oder URL zur Bewerbung auf
              Bewerberportal angeben.</span
            >
          </b-form-invalid-feedback>
        </div>
        <div class="col-12 col-lg-6">
          <label for="ext-job-url"
            >URL zur Bewerbung auf Ihrem Bewerberportal</label
          >
          <b-input-group>
            <template #prepend>
              <b-input-group-text
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                  />
                  <path
                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                  /></svg
              ></b-input-group-text>
            </template>
            <b-form-input
              id="ext-job-url"
              v-model="job.extJobUrl"
              type="url"
              lazy-formatter
              :formatter="formatter"
              :state="
                validated
                  ? job.extJobUrl
                    ? true
                    : !job.applicationEmail &&
                      !job.extJobUrl &&
                      !job.simpleApplication
                    ? false
                    : null
                  : null
              "
              placeholder="https://www.ihr-unternehmen.com/karriere/stelle/bewerben"
              aria-describedby="ext-job-url-feedback ext-job-url-help"
            />
          </b-input-group>
          <b-form-text id="ext-job-url-help" class="ml-2"
            >optional, wenn Bewerberportal vorhanden</b-form-text
          >
          <b-form-invalid-feedback
            id="ext-job-url-feedback"
            :state="
              validated
                ? job.extJobUrl
                  ? true
                  : !job.applicationEmail &&
                    !job.extJobUrl &&
                    !job.simpleApplication
                  ? false
                  : null
                : null
            "
            class="ml-2"
          >
            Bitte E-Mail Adresse für Bewerbungen oder URL zur Bewerbung auf
            Bewerberportal angeben.
          </b-form-invalid-feedback>
        </div>
        <div class="col-12 col-lg-8">
          <label for="title-image">Team/Praxis Bild</label>
          <ImageUploader
            id="title-image"
            :validated="validated"
            :image-url="job.imageUrl"
            :width="1280"
            :height="720"
            fit="inside"
            aria-describedby="image-url-help"
            @update-url="job.imageUrl = $event"
          />
          <b-form-text id="image-url-help" class="ml-2"
            >jpg, png | max. 5MB</b-form-text
          >
          <b-form-input
            v-if="$store.state.auth.user.isAdmin"
            v-model="job.imageUrl"
            class="bg-light-shade mt-2"
            type="url"
            placeholder="ADMIN - URL to image (incl. https://)"
          >
          </b-form-input>
          <div
            class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
            style="width: 150px; height: 150px"
          >
            <b-img v-if="job.imageUrl" :src="job.imageUrl" fluid />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-image p-4"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path
                d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <label for="min-salary">Minimum Monatsgehalt</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>€</b-input-group-text>
            </template>
            <b-form-input
              id="min-salary"
              v-model="job.salaryMin"
              type="number"
              step="1"
              :state="validated ? (job.salaryMin ? true : null) : null"
              placeholder="z.B. 2500"
              aria-describedby="min-salary-help"
            />
          </b-input-group>
          <b-form-text id="min-salary-help" class="ml-2">optional</b-form-text>
        </div>
        <div class="col">
          <label for="max-salary">Maximum Monatsgehalt</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>€</b-input-group-text>
            </template>
            <b-form-input
              id="max-salary"
              v-model="job.salaryMax"
              type="number"
              step="1"
              :state="validated ? (job.salaryMax ? true : null) : null"
              placeholder="z.B. 3000"
              aria-describedby="max-salary-help"
            />
          </b-input-group>
          <b-form-text id="max-salary-help" class="ml-2">optional</b-form-text>
        </div>
      </div>

      <h3 class="mt-4 mt-lg-5 mb-0 bold">Kontakt für Bewerbungen</h3>

      <div class="row">
        <div class="col-12 col-lg-3">
          <label for="contact-gender">Anrede</label>
          <b-form-select
            id="contact-gender"
            v-model="job.contactGender"
            :state="validated ? (job.contactGender ? true : null) : null"
          >
            <b-form-select-option value=""
              >-- Anrede auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="title in contactGenderOptions"
              :key="title"
              :value="title"
              >{{ title }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-3">
          <label for="contact-title">Titel</label>
          <b-form-select
            id="contact-title"
            v-model="job.contactTitle"
            :state="validated ? (job.contactTitle ? true : null) : null"
          >
            <b-form-select-option value=""
              >-- Titel auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="title in contactTitleOptions"
              :key="title"
              :value="title"
              >{{ title }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-3">
          <label for="contact-first-name">Vorname</label>
          <b-form-input
            id="contact-first-name"
            v-model="job.contactFirstName"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.contactFirstName ? true : null) : null"
            placeholder="Vorname eingeben..."
            trim
          />
        </div>
        <div class="col-12 col-lg-3">
          <label for="contact-last-name">Nachname</label>
          <b-form-input
            id="contact-last-name"
            v-model="job.contactLastName"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.contactLastName ? true : null) : null"
            placeholder="Nachname eingeben..."
            trim
          />
        </div>
        <div class="col-12 col-lg-6">
          <label for="contact-position">Position im Unternehmen</label>
          <b-form-input
            id="contact-position"
            v-model="job.contactPosition"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.contactPosition ? true : null) : null"
            placeholder="z.B. Praxismanagerin / HR-Recruiter..."
            trim
          />
          <b-form-text id="contact-position-help" class="ml-2"
            >optional, falls relevant</b-form-text
          >
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="contact-email">E-Mail Adresse</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>@</b-input-group-text>
            </template>
            <b-form-input
              id="contact-email"
              v-model="job.contactEmail"
              type="email"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (job.contactEmail ? true : null) : null"
              placeholder="kontakt@ihr-unternehmen.de"
              trim
            />
          </b-input-group>
        </div>
        <div class="col-12 col-lg-6">
          <label for="contact-phone">Telefon</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                  />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
              ></b-input-group-text>
            </template>
            <b-form-input
              id="contact-phone"
              v-model="job.contactPhone"
              type="tel"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (job.contactPhone ? true : null) : null"
              placeholder="030 123 45 678"
            />
          </b-input-group>
        </div>
      </div>

      <h3 class="bold mt-4 mt-lg-5 mb-0">Arbeitsort</h3>

      <div class="row">
        <div class="col-12 col-lg-6 mb-2">
          <label for="company-list">Vorhandenes Unternehmen wählen</label>
          <b-form-select
            id="company-list"
            v-model="selectedCompanyId"
            @change="setCompany"
            ><b-form-select-option
              v-for="company in companies"
              :key="company._id"
              :value="company._id"
              >{{
                company.name + " | " + company.location
              }}</b-form-select-option
            ></b-form-select
          >
        </div>
        <div class="col-12 col-lg-3 mb-2 d-flex align-items-end">
          <b-button variant="warning" @click.prevent="resetCompany"
            >Zurücksetzen</b-button
          >
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-name" required>Unternehmensname</label>
          <b-form-input
            id="company-name"
            v-model="job.company.name"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.company.name ? true : false) : null"
            placeholder="Unternehmensname eingeben..."
            trim
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-street" required>Straße und Hausnummer</label>
          <b-form-input
            id="company-street"
            v-model="job.company.street"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.company.street ? true : false) : null"
            placeholder="Straße und Hausnummer eingeben..."
            required
            trim
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-zip-code" required>PLZ</label>
          <b-form-input
            id="company-zip-code"
            v-model="job.company.zipCode"
            type="text"
            :state="validated ? (job.company.zipCode ? true : false) : null"
            placeholder="PLZ eingeben..."
            required
            trim
          />
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-location" required>Ort</label>
          <b-form-input
            id="company-location"
            v-model="job.company.location"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (job.company.location ? true : false) : null"
            placeholder="Ort eingeben..."
            required
            trim
          />
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-country" required>Land</label>
          <b-form-select
            id="company-country"
            v-model="job.company.country"
            :state="validated ? (job.company.country ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Land auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="country in companyCountryOptions"
              :key="country"
              :value="country"
              >{{ country }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-url">Unternehmenswebseite</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                  />
                  <path
                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                  /></svg
              ></b-input-group-text>
            </template>
            <b-form-input
              id="company-url"
              v-model="job.company.url"
              type="url"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (job.company.url ? true : null) : null"
              placeholder="https://www.ihr-unternehmen.de"
            />
          </b-input-group>
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-size">Unternehmensgröße</label>
          <b-form-select
            id="company-size"
            v-model="job.company.size"
            :state="validated ? (job.company.size ? true : null) : null"
          >
            <b-form-select-option value=""
              >-- Unternehmensgröße auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="size in companySizeOptions"
              :key="size"
              :value="size"
              >{{ size }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-8">
          <label for="logo">Logo</label>
          <ImageUploader
            id="logo"
            :validated="validated"
            :image-url="job.company.logoUrl"
            :width="200"
            :height="200"
            fit="outside"
            aria-describedby="logo-url-help"
            @update-url="job.company.logoUrl = $event"
          />
          <b-form-text id="logo-url-help" class="ml-2"
            >jpg, png | max. 5MB</b-form-text
          >
          <b-form-input
            v-if="$store.state.auth.user.isAdmin"
            v-model="job.company.logoUrl"
            class="bg-light-shade mt-2"
            type="url"
            placeholder="ADMIN - URL to image (incl. https://)"
          >
          </b-form-input>
          <div
            class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
            style="width: 55px; height: 55px"
          >
            <b-img
              v-if="job.company.logoUrl"
              :src="job.company.logoUrl"
              fluid
              style="max-height: 100%; max-width: 100%"
            />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-box p-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
              />
            </svg>
          </div>
        </div>
      </div>

      <p class="small text-muted mt-4">
        <strong>Hinweis:</strong> Zu angelegten Unternehmen können Sie
        <u>optional</u> und nach Bedarf im Anschluss unter KONTO > UNTERNEHMEN
        über die 'Bearbeiten'-Funktion eine allgemeine Unternehmensbeschreibung
        für Ihr individuelles Unternehmensprofil auf MFA mal anders anlegen.
      </p>

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
          Abbrechen
        </b-button>
        <b-button variant="success" @click.prevent="onSubmit">
          Speichern
        </b-button>
      </div>
    </b-form>
    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import TipTapEditor from "@/components/TipTapEditor.vue";
  import ImageUploader from "@/components/ImageUploader.vue";
  import { saveCompanyMixin } from "@/mixins/saveCompanyMixin";
  import { saveJobMixin } from "@/mixins/saveJobMixin";
  import {
    professionOptions,
    specializationOptions,
    employmentTypeOptions,
    simpleApplicationOptions,
    contactGenderOptions,
    contactTitleOptions,
    companyStateOptions,
    companyCountryOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  import { BFormDatepicker } from "bootstrap-vue";
  import Vue from "vue";
  Vue.component("BFormDatepicker", BFormDatepicker);
  export default {
    name: "JobDataForm",
    components: {
      TipTapEditor,
      ImageUploader
    },
    mixins: [saveCompanyMixin, saveJobMixin],
    props: { apiJobsSchema: { type: String, default: "private" } },
    data() {
      return {
        job: {
          _id: this.$route.params.jobId,
          userId: { _id: undefined },
          publishedAt: 0,
          paidExpiresAt: 0,
          refreshFrequency: 0,
          videoUrl: "",
          title: "",
          description:
            "<p>[Für eine attraktive Stellenanzeige sollten Sie mindestens folgende Punkte berücksichtigen. Bitte ersetzen Sie den hier stehenden Text entsprechend.]</p><p>[Schreiben Sie eine kurze Einleitung zu Ihrem Unternehmen.]</p><h3>Was wir Ihnen bieten</h3><p>[Was bieten Sie potentiellen BewerberInnen?]</p><h3>Ihre Aufgaben</h3><p>[Welche Aufgaben sollen von potentiellen BewerberInnen durchgeführt werden?]</p><h3>Ihr Profil</h3><p>[Was sollen potentielle BewerberInnen mitbringen?]</p>",
          profession: "",
          specialization: "",
          employmentType: "",
          applicationDeadline: null,
          simpleApplication: true,
          extJobUrl: "",
          applicationEmail: "",
          imageUrl: "",
          salaryMin: "",
          salaryMax: "",
          contactGender: "",
          contactTitle: "",
          contactFirstName: "",
          contactLastName: "",
          contactPosition: "",
          contactEmail: "",
          contactPhone: "",
          company: {
            _id: "",
            name: "",
            description: "",
            noLocation: false,
            street: "",
            location: "",
            zipCode: "",
            state: "",
            country: companyCountryOptions[0],
            geoCodeLat: null,
            geoCodeLng: null,
            size: "",
            url: "",
            logoUrl: ""
          }
        },
        companies: [],
        selectedCompanyId: "",
        professionOptions,
        specializationOptions,
        employmentTypeOptions: employmentTypeOptions.filter(
          opt => opt.value !== "freelance"
        ),
        simpleApplicationOptions,
        contactGenderOptions,
        contactTitleOptions,
        companyCountryOptions,
        companyStateOptions,
        companySizeOptions,
        validated: null,
        success: "",
        error: ""
      };
    },
    computed: {
      publishedAt: {
        get() {
          return new Date(this.job.publishedAt);
        },
        set(value) {
          this.job.publishedAt = new Date(value).getTime();
        }
      },
      paidExpiresAt: {
        get() {
          return new Date(this.job.paidExpiresAt);
        },
        set(value) {
          this.job.paidExpiresAt = new Date(value).getTime();
        }
      },
      applicationDeadline: {
        get() {
          if (this.job.applicationDeadline) {
            return new Date(this.job.applicationDeadline);
          } else {
            return "";
          }
        },
        set(value) {
          if (value) {
            this.job.applicationDeadline = new Date(value).getTime();
          } else {
            this.job.applicationDeadline = null;
          }
        }
      },
      jobQuery: function() {
        return this.apiJobsSchema === "admin" ? "adminJob" : "myJob";
      }
    },
    created() {
      this.setAdminDates();
      if (this.$route.params.jobId != "new") {
        this.getJob(this.$route.params.jobId);
      }
      this.getCompanies();
    },
    methods: {
      setAdminDates() {
        if (this.$store.state.auth.user.isAdmin) {
          this.publishedAt = new Date();
          this.paidExpiresAt = new Date(
            new Date().valueOf() + 1000 * 60 * 60 * 24 * 60
          );
        }
      },
      async getJob(id) {
        this.$store.dispatch("setOverlay", true);

        try {
          const job = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                query {
                  ${this.jobQuery}(_id: "${id}") {
                    _id
                    userId {
                      _id
                    }
                    publishedAt
                    paidExpiresAt
                    refreshFrequency
                    videoUrl
                    title
                    description
                    profession
                    employmentType
                    applicationDeadline
                    simpleApplication
                    specialization
                    extJobUrl
                    applicationEmail
                    imageUrl
                    salaryMin
                    salaryMax
                    contactGender
                    contactTitle
                    contactFirstName
                    contactLastName
                    contactPosition
                    contactEmail
                    contactPhone
                    company {
                      _id
                      name
                      noLocation
                      street
                      location
                      zipCode
                      state
                      country
                      geoCodeLat
                      geoCodeLng
                      size
                      url
                      logoUrl
                    }
                  }
                }
              `
            }
          });

          if (!job.data.data[this.jobQuery].company) {
            job.data.data[this.jobQuery].company = {
              _id: "",
              name: "",
              description: "",
              noLocation: false,
              street: "",
              location: "",
              zipCode: "",
              state: "",
              country: this.companyCountryOptions[0],
              geoCodeLat: null,
              geoCodeLng: null,
              size: "",
              url: "",
              logoUrl: ""
            };
          }

          this.job = job.data.data[this.jobQuery];

          this.selectedCompanyId = this.job.company._id;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async getCompanies() {
        try {
          const companies = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                query {
                  myCompanies {
                    _id
                    name
                    description
                    noLocation
                    street
                    location
                    zipCode
                    state
                    country
                    geoCodeLat
                    geoCodeLng
                    size
                    url
                    logoUrl
                  }
                }
              `
            }
          });

          this.companies = companies.data.data.myCompanies.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden Ihrer erstellten Unternehmen ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async onSubmit() {
        this.error = false;

        if (!this.formValidation()) {
          this.error =
            "Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!";

          return null;
        }

        this.$store.dispatch("setOverlay", true);

        // Save / Update company
        let companyMutationType;

        if (!this.job.company._id) {
          companyMutationType = "addCompany";
        } else {
          this.apiJobsSchema === "admin"
            ? (companyMutationType = "adminUpdateCompany")
            : (companyMutationType = "updateCompany");
        }

        const savedCompany = await this.saveCompany(
          companyMutationType,
          this.job.company,
          false,
          this.job.userId ? this.job.userId._id : undefined
        );

        if (savedCompany.success) {
          this.job.company._id = savedCompany.companyId;

          // Save / Update job
          let jobMutationType;

          if (this.job._id === "new") {
            this.apiJobsSchema === "private"
              ? (jobMutationType = "addJob")
              : (jobMutationType = "adminAddJob");
          } else {
            this.apiJobsSchema === "private"
              ? (jobMutationType = "updateJob")
              : (jobMutationType = "adminUpdateJob");
          }

          const savedJob = await this.saveJob(jobMutationType, this.job, true);

          this.success = savedJob.success;
        }

        this.$store.dispatch("setOverlay", false);
      },
      formatter(value) {
        return value.replace(/"/gi, "'").replace(/\\/g, "/");
      },
      formValidation() {
        this.validated = true;
        return !this.job.title ||
          this.job.title.length > 155 ||
          !this.job.description ||
          !this.job.employmentType ||
          (!this.job.applicationEmail && !this.job.extJobUrl) ||
          (this.job.simpleApplication && !this.job.applicationEmail) ||
          !this.job.company.name ||
          ((!this.job.company.country ||
            !this.job.company.location ||
            !this.job.company.street ||
            !this.job.company.zipCode) &&
            !this.job.company.noLocation)
          ? false
          : true;
      },
      resetCompany() {
        // for (const key in this.job.company) {
        //   this.job.company[key] = "";
        // }
        this.job.company = {
          _id: "",
          name: "",
          description: "",
          noLocation: false,
          street: "",
          location: "",
          zipCode: "",
          state: "",
          country: this.companyCountryOptions[0],
          geoCodeLat: null,
          geoCodeLng: null,
          size: "",
          url: "",
          logoUrl: ""
        };
        this.selectedCompanyId = "";
      },
      setCompany() {
        this.job.company = this.companies.find(
          company => company._id === this.selectedCompanyId
        );
      }
    }
  };
</script>
