<template>
  <div id="preview">
    <div id="header">
      <div>
        {{ content.title }}
      </div>
      <div id="logo-container">
        <img :src="content.logoUrl" alt="" />
      </div>
    </div>

    <div id="meta">
      <div v-if="content.location">
        <Fa class="mr-3" :icon="['fas', 'map-marker']" size="lg" />{{
          content.location
        }}
      </div>
      <div v-if="content.companyName">
        <Fa class="mr-3" :icon="['fas', 'building']" size="lg" />{{
          content.companyName
        }}
      </div>
      <div v-if="content.employmentType">
        <Fa class="mr-3" icon="clock" size="lg" />{{ content.employmentType }}
      </div>
    </div>

    <div id="desc">
      <div>
        <span class="mr-3 bold" style="font-size: 30px">+</span
        ><span>{{ content.descOne }}</span>
      </div>
      <div>
        <span class="mr-3 bold" style="font-size: 30px">+</span
        ><span>{{ content.descTwo }}</span>
      </div>
      <div>
        <span class="mr-3 bold" style="font-size: 30px">+</span
        ><span>{{ content.descThree }}</span>
      </div>
    </div>

    <div id="title-image">
      <img :src="content.imageUrl" alt="" />
      <div id="overlay1"></div>
      <div id="overlay2"></div>
    </div>

    <div id="footer">
      <img
        src="https://www.mfa-mal-anders.de/img/MfaMalAnders_logo_circle_dark.svg"
        alt=""
      />
      <span id="website">www.mfa-mal-anders.de</span>
      <span id="hashtag">#jobOfTheDay</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobOfTheDayImage",
    props: {
      content: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  #preview {
    position: relative;
    width: 1080px;
    height: 1080px;
    // padding: 40px;
    box-shadow: $shadow1;
    transform-origin: top left;
    transform: scale(0.5);
    overflow: hidden;

    #header {
      //   position: absolute;
      display: flex;
      justify-content: space-between;
      padding: 40px;
      color: $light;
      font-size: 40px;
      font-weight: bold;

      #logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $light;
        box-shadow: $shadow1;
        border-radius: $border-radius1;
        min-width: 150px;
        height: 100%;
        padding: 10px;

        img {
          max-width: 120px;
          max-height: 140px;
        }
      }
    }

    #title-image {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;

      img {
        height: 400px;
        width: 100%;
        object-fit: cover;
        object-position: center center;
      }

      #overlay1 {
        position: absolute;
        top: -20px;
        right: 0;
        left: -10px;
        width: 110%;
        height: 50px;
        background: $light;
        transform: rotateZ(-2deg);
      }

      #overlay2 {
        position: absolute;
        right: 0;
        bottom: -80px;
        left: 0;
        width: 110%;
        height: 50px;
        background: $light;
        transform: rotateZ(-6deg);
      }
    }

    #meta {
      display: flex;
      flex-wrap: wrap;
      padding: 40px;
      color: $primary;
      font-size: 26px;

      div {
        margin-right: 35px;
        margin-bottom: 10px;
      }
    }

    #desc {
      display: flex;
      flex-direction: column;
      //   justify-content: flex-start;
      align-items: flex-start;
      padding: 40px;
      font-size: 24px;

      div {
        display: inline-flex;
        align-items: center;
        // justify-content: flex-start;
        padding: 4px 10px;
        background-color: $light-shade;
        border-radius: $border-radius1;
        margin-bottom: 15px;
      }
    }

    #footer {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: 40px;
      left: 40px;
      right: 40px;
      background: linear-gradient(
        172.26deg,
        #6d0230 5.98%,
        rgba(109, 2, 48, 0.54) 94.02%
      );
      color: $light;
      height: 65px;
      border-radius: $border-radius2;
      font-size: 26px;

      img {
        height: 100px;
      }

      #website {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      #hashtag {
        color: $secondary;
        font-family: $headings-font-family;
        margin-right: 15px;
        font-size: 30px;
      }
    }
  }
</style>
