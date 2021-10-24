<template>
  <header id="header" ref="header" :class="{ hide: hideNavbar }">
    <div id="navbar" class="container">
      <router-link to="/">
        <b-img
          class="header-logo"
          src="/img/MfaMalAnders_Logo_white.svg"
          alt="MFA mal anders - Logo"
          fluid
        />
      </router-link>

      <div
        :class="['nav-wrapper', { collapsed: navCollapsed }]"
        @click="navCollapsed = true"
      >
        <nav id="primary-nav">
          <router-link
            v-for="link in headerLinks"
            :key="link.title"
            :to="link.path"
            @mouseenter.native="link.children && showSub(link.title)"
            @mouseleave.native="link.children && hideSub(link.title)"
            ><span
              >{{ link.title }}
              <Fa v-if="link.icon" class="icon" :icon="link.icon" size="xs" />
            </span>
            <div v-if="link.children" :id="link.title" class="sub-menu">
              <router-link
                v-for="subLink in link.children"
                :key="subLink.title"
                :to="subLink.path"
                @mouseenter.native="subLink.children && showSub(subLink.title)"
                @mouseleave.native="subLink.children && hideSub(subLink.title)"
                >{{ subLink.title }}
                <Fa
                  v-if="subLink.icon"
                  class="ml-1 icon"
                  :icon="subLink.icon"
                  size="xs"/>
                <div
                  v-if="subLink.children"
                  :id="subLink.title"
                  class="sub-menu"
                >
                  <router-link
                    v-for="subSubLink in subLink.children"
                    :key="subSubLink.title"
                    :to="subSubLink.path"
                    >{{ subSubLink.title }}
                    <Fa
                      v-if="subSubLink.icon"
                      class="ml-1 icon"
                      :icon="subSubLink.icon"
                      size="xs"
                  /></router-link></div
              ></router-link>
            </div>
          </router-link>
        </nav>
        <nav id="secondary-nav" class="mt-3 mt-lg-0">
          <router-link
            v-if="loggedIn"
            to="/user/dashboard"
            @mouseenter.native="showSub('account')"
            @mouseleave.native="hideSub('account')"
          >
            <div class="d-flex align-items-center">
              <b-img
                v-if="user.image"
                :src="user.image"
                class="mr-1 rounded-circle"
                style="width: 25px; height: 25px; object-fit: cover"
              />
              <span
                v-else
                class="bg-light rounded-circle text-primary d-flex justify-content-center align-items-center mr-1"
                style="width: 22.5px; height: 22.5px"
              >
                <Fa icon="user" size="sm" />
              </span>
              <span>Mein Konto</span>
              <Fa class="ml-1" icon="chevron-down" size="xs" />
            </div>
            <div id="account" class="sub-menu">
              <router-link
                to="/user/dashboard?tab=0"
                :active="$route.path == '/user/dashboard' && !$route.query.tab"
                :active-class="
                  $route.query.tab == 0 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 0 ? 'router-link-active' : ''
                "
                >Account</router-link
              >
              <router-link
                v-if="$store.state.auth.user.isEmployer"
                to="/user/dashboard?tab=1"
                :active-class="
                  $route.query.tab == 1 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 1 ? 'router-link-active' : ''
                "
                >Stellenanzeigen</router-link
              >
              <router-link
                v-if="$store.state.auth.user.isEmployer"
                to="/user/dashboard?tab=2"
                :active-class="
                  $route.query.tab == 2 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 2 ? 'router-link-active' : ''
                "
                >Unternehmen</router-link
              >
              <router-link
                v-if="$store.state.auth.user.isEmployer"
                to="/user/dashboard?tab=3"
                :active-class="
                  $route.query.tab == 3 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 3 ? 'router-link-active' : ''
                "
                >Zahlungen</router-link
              >
              <router-link
                v-if="$store.state.auth.user.isEducational"
                to="/user/dashboard?tab=4"
                :active-class="
                  $route.query.tab == 4 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 4 ? 'router-link-active' : ''
                "
                >Fortbildungen</router-link
              >
              <router-link
                v-if="
                  $config.starredJobs.active &&
                    ($store.state.auth.user.isEmployee ||
                      ($store.state.starredJobs.starredJobs &&
                        $store.state.starredJobs.starredJobs.length > 0))
                "
                to="/user/dashboard?tab=5"
                :active-class="
                  $route.query.tab == 5 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 5 ? 'router-link-active' : ''
                "
                >Gespeicherte Jobs</router-link
              >
              <router-link
                v-if="
                  $store.state.auth.user.isEmployee ||
                    $store.state.auth.user.isAdmin
                "
                to="/user/dashboard?tab=6"
                :active-class="
                  $route.query.tab == 6 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 6 ? 'router-link-active' : ''
                "
                >Job-Newsletter</router-link
              >
            </div>
          </router-link>

          <router-link
            v-if="user.isAdmin"
            to="/admin"
            @mouseenter.native="showSub('admin')"
            @mouseleave.native="hideSub('admin')"
          >
            <div class="d-flex align-items-center">
              <Fa icon="key" size="lg" />
              <Fa class="ml-1" icon="chevron-down" size="xs" />
            </div>
            <div id="admin" class="sub-menu">
              <router-link
                to="/admin?tab=0"
                :active="$route.path == '/admin?tab=0' && !$route.query.tab"
                :active-class="
                  $route.query.tab == 0 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 0 ? 'router-link-active' : ''
                "
                >Jobs</router-link
              >
              <router-link
                to="/admin?tab=1"
                :active-class="
                  $route.query.tab == 1 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 1 ? 'router-link-active' : ''
                "
                >Companies</router-link
              >
              <router-link
                to="/admin?tab=2"
                :active-class="
                  $route.query.tab == 2 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 2 ? 'router-link-active' : ''
                "
                >Users</router-link
              >
              <router-link
                to="/admin?tab=3"
                :active-class="
                  $route.query.tab == 3 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 3 ? 'router-link-active' : ''
                "
                >Coupons</router-link
              >
              <router-link
                to="/admin?tab=4"
                :active-class="
                  $route.query.tab == 4 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 4 ? 'router-link-active' : ''
                "
                >Subscribers</router-link
              >
              <router-link
                to="/admin?tab=5"
                :active-class="
                  $route.query.tab == 5 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 5 ? 'router-link-active' : ''
                "
                >Payments</router-link
              >
              <router-link
                to="/admin?tab=6"
                :active-class="
                  $route.query.tab == 6 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 6 ? 'router-link-active' : ''
                "
                >Trainings</router-link
              >
              <router-link
                to="/admin?tab=7"
                :active-class="
                  $route.query.tab == 7 ? 'router-link-active' : ''
                "
                :exact-active-class="
                  $route.query.tab == 7 ? 'router-link-active' : ''
                "
                >Data Analytics</router-link
              >
            </div>
          </router-link>
          <div v-if="loggedIn"><LogoutBtn /></div>
          <div v-else class="d-flex">
            <b-button
              class="mr-1 px-4 py-1"
              variant="secondary"
              size="sm"
              to="/auth/login"
              >Login</b-button
            >
            <b-button
              class="px-3"
              variant="secondary"
              size="lg"
              to="/auth/register"
              ><Fa style="margin: 0.1rem" icon="user-plus" size="sm" />
              <span class="sr-only">Registrieren</span>
            </b-button>
          </div>
        </nav>
      </div>

      <div
        :class="['ui-hamburger-05', { collapsed: navCollapsed }]"
        @click="navCollapsed = !navCollapsed"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
  const LogoutBtn = () =>
    import(
      /* webpackChunkName: "LogoutBtn" */ "@/components/buttons/LogoutBtn"
    );
  export default {
    name: "Header",
    components: {
      LogoutBtn
    },
    data() {
      return {
        hideNavbar: false,
        navCollapsed: true,
        headerLinks: [
          // {
          //   title: "Home",
          //   path: "/"
          // },
          {
            title: "Stellenangebote",
            path: "/stellenangebote"
          },
          {
            title: "Karriere",
            path: "/karriere",
            icon: "chevron-down",
            children: [
              {
                title: "MFA – Ausbildung & Berufsbild",
                path: "/karriere/mfa/ausbildung-berufsbild"
              },
              {
                title: "MFA – Gehalt",
                path: "/karriere/mfa/gehalt"
              },
              {
                title: "ZFA – Gehalt",
                path: "/karriere/zfa/gehalt"
              },
              {
                title: "Gehaltsverhandlung 2021",
                path:
                  "/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              },
              {
                title: "Bewerbungstipps",
                path: "/karriere/bewerbungstipps"
              },
              {
                title: "Jobs & Berufsbilder",
                path: "/karriere/jobs-und-berufsbilder"
                // icon: "chevron-right"
                // children: [
                //     {
                //         title: "Medizinisch-Technisch",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/medizinisch-technisch"
                //     },
                //     {
                //         title: "Verwaltung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/verwaltung"
                //     },
                //     {
                //         title: "Management",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/management"
                //     },
                //     {
                //         title: "Beratung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/beratung"
                //     },
                //     {
                //         title: "Forschung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/forschung"
                //     }
                // ]
              },
              {
                title: "Fort- & Weiterbildungen",
                path: "/karriere/fort-und-weiterbildungen"
              },
              {
                title: "Fortbildungskatalog",
                path: "/karriere/fortbildungskatalog"
              }
            ]
          },
          {
            title: "Blog",
            path: "/blog"
          },
          {
            title: "Für Arbeitgeber",
            path: "/fuer-arbeitgeber"
          },
          {
            title: "Über",
            path: "/ueber"
          },
          {
            title: "Kontakt",
            path: "/kontakt"
          }
        ],
        previousScrollPositionY: document.documentElement.scrollTop
      };
    },
    computed: {
      user() {
        return this.$store.state.auth.user;
      },
      loggedIn() {
        return this.$store.state.auth.loggedIn;
      }
    },
    mounted() {
      this.checkHeaderVisible();
    },
    methods: {
      showSub(id) {
        document.getElementById(id).classList.add("show");
      },
      hideSub(id) {
        document.getElementById(id).classList.remove("show");
      },
      checkHeaderVisible(timer = 0) {
        setTimeout(() => {
          let currentPositionY = document.documentElement.scrollTop;

          if (
            currentPositionY > this.previousScrollPositionY &&
            currentPositionY > this.$refs.header.offsetHeight &&
            this.navCollapsed &&
            !this.$refs.header.classList.contains("hide")
          ) {
            this.hideNavbar = true;
          } else if (
            currentPositionY < this.previousScrollPositionY &&
            this.$refs.header.classList.contains("hide")
          ) {
            this.hideNavbar = false;
          }

          this.previousScrollPositionY = document.documentElement.scrollTop;

          this.checkHeaderVisible(100);
        }, timer);
      }
    }
  };
</script>

<style lang="scss">
  #header {
    background: $primary;
    font-family: $headings-font-family;
    box-shadow: $shadow1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 1000;
    transition: ease-in-out 0.3s;

    @media screen and (max-width: $break-menu) {
      max-height: 100vh;
      overflow-y: hidden;
      height: 60px;
    }

    &.hide {
      transform: translateY(-100%);
    }

    #navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1300px;
      padding: 0 0.75rem;

      .header-logo {
        height: 50px;
        margin: 0.5rem 1rem;

        @media screen and (max-width: $break-menu) {
          height: 44px;
        }
      }

      .nav-wrapper {
        flex-grow: 1;
        display: flex;
        padding: 1rem;

        @media screen and (max-width: $break-menu) {
          position: fixed;
          padding-bottom: 70px;
          left: 0;
          top: 60px;
          bottom: 0;
          min-height: calc(100vh - 60px);
          flex-direction: column;
          background-color: $primary;
          box-shadow: $shadow1;
          transition: ease-in-out 0.3s;
          overflow: auto;

          &.collapsed {
            transform: translateX(-100%);
          }
        }

        nav {
          display: flex;
          justify-content: center;
          align-items: center;

          @media screen and (max-width: $break-menu) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }

          a {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.4rem 0.5rem;
            color: transparentize($color: $light, $amount: 0.3);

            @media screen and (max-width: $break-menu) {
              flex-direction: column;
              align-items: flex-start;
            }

            &:not([href="/"]) {
              &.router-link-active {
                color: transparentize($color: $light, $amount: 0);
              }
            }

            &.router-link-exact-active,
            &.active {
              color: transparentize($color: $light, $amount: 0);
            }

            &:hover {
              color: transparentize($color: $light, $amount: 0);
            }
          }

          .sub-menu {
            position: absolute;
            top: 100%;
            background-color: $primary;
            border-radius: $border-radius1;
            width: max-content;
            max-height: 0;
            overflow-y: hidden;
            visibility: hidden;
            transition: linear 0.3s;

            @media screen and (max-width: $break-menu) {
              display: block;
              position: relative;
              top: 0%;
              left: 0;
              max-height: none;
              visibility: visible;
            }

            &.show {
              max-height: 300px;
              visibility: visible;

              @media screen and (max-width: $break-menu) {
                max-height: none;
              }
            }

            a {
              padding: 0.4rem 1rem;

              @media screen and (max-width: $break-menu) {
                .svg-inline--fa {
                  display: none;
                }
              }

              .sub-menu {
                top: 0%;
                left: 100%;

                @media screen and (max-width: $break-menu) {
                  display: none;
                }
              }
            }
          }
        }

        #primary-nav {
          flex-grow: 1;
        }
      }
    }
  }

  /* #Animate navbar menu icon */
  .ui-hamburger-05 {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 35px;
    height: 30px;
    border: none;
    position: relative;
    background: linear-gradient(
      to bottom,
      transparentize($light, 0.5),
      transparentize($light, 0.5)
    );
    background-size: 0 0;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    display: none;

    @media screen and (max-width: $break-menu) {
      display: block;
    }

    &:focus {
      outline: none;
    }

    &:before,
    &:after {
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      background-color: transparentize($light, 0.5);
      content: "";
      transition: transform 0.4s ease;
    }

    &:before {
      top: 10px;
    }

    &:after {
      bottom: 10px;
    }

    &:not(.collapsed) {
      background-size: 0 0;
    }

    &:not(.collapsed):before,
    &:not(.collapsed):after {
      transition-delay: 0.1s;
    }

    &:not(.collapsed):before {
      transform: translateY(4px) rotate(45deg);
    }

    &:not(.collapsed):after {
      transform: translateY(-4px) rotate(-45deg);
    }
  }
</style>
