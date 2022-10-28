<template>
  <router-link
    to="/admin/users"
    @mouseenter.native="showSub('admin')"
    @mouseleave.native="hideSub('admin')"
  >
    <div class="d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-shield-lock-fill mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
        />
      </svg>
      <span>Admin</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down ml-1"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div id="admin" ref="admin" class="sub-menu">
      <router-link to="/admin/users">Users</router-link>
      <router-link to="/admin/jobs">Jobs</router-link>
      <router-link to="/admin/jobseeks">JobSeeks</router-link>
      <router-link to="/admin/companies">Companies</router-link>
      <router-link to="/admin/trainings">Trainings</router-link>
      <router-link to="/admin/subscribers">Subscribers</router-link>
      <router-link to="/admin/invoices">Invoices</router-link>
      <router-link to="/admin/data-analytics">Data Analytics</router-link>
      <router-link to="/admin/tools">Tools</router-link>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "NavHeaderAdmin",
    methods: {
      showSub(id) {
        this.$refs[id].classList.add("show");
      },
      hideSub(id) {
        this.$refs[id].classList.remove("show");
      }
    }
  };
</script>
