<template>
  <div class="byte">
    <div class="byte-info">
      <div class="byte-title">
        <h2 v-if="isAdmin">Your Byte</h2>
        <h2 v-else>{{ user.username }}'s Byte</h2>
      </div>
      <div class="byte-picture">
        <img src="../data/images/desk1.jpeg" class="image-main" alt="" />
      </div>
      <div class="byte-desc">
        <div class="desc-category">
          <li>description</li>
          <p>
            This is my home setup, been working on it since 2019 and slowly
            improving it! Add a comment if you like it
          </p>
        </div>
        <div class="desc-category">
          <li>equipment</li>
          <p>
            Ezydox Keyboard, Ikea Standing Desk, Dell Screen, 13 inch MacBook
            Pro
          </p>
        </div>
      </div>
    </div>
    <div class="byte-menu">
      <h2>Upvotes</h2>
      <ul class="votes">
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[0] }"
            @click="upvoteCool()"
          >
            <li>Cool</li>
            <img class="emoji" src="../assets/emojis/coolEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="cool"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.cool }}</p>
        </div>
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[1] }"
            @click="upvoteClean()"
          >
            <li>Clean</li>
            <img class="emoji" src="../assets/emojis/broomEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="clean"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.clean }}</p>
        </div>
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[2] }"
            @click="upvoteCreative()"
          >
            <li>Creative</li>
            <img class="emoji" src="../assets/emojis/creativeEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="creative"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.creative }}</p>
        </div>
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[3] }"
            @click="upvoteOriginal()"
          >
            <li>Original</li>
            <img class="emoji" src="../assets/emojis/lightEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="original"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.original }}</p>
        </div>
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[4] }"
            @click="upvoteProductive()"
          >
            <li>Productive</li>
            <img class="emoji" src="../assets/emojis/workEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="productive"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.productive }}</p>
        </div>
        <div class="vote-category">
          <button
            class="vote-button"
            v-bind:class="{ inactive: !upvoteActive[5] }"
            @click="upvoteWow()"
          >
            <li>WOW</li>
            <img class="emoji" src="../assets/emojis/mindblowEmoji.png" />
          </button>
          <div class="progress-container">
            <div class="progress-bar" :style="cssVars" id="wow"></div>
          </div>
          <p class="vote-count">{{ user.upvotes.wow }}</p>
        </div>
        <!-- <ul>
          <li v-for="(value, name, index) in user.upvotes" :key="index">{{ name }}</li>
        </ul> -->
        <!-- <h4>upvotes: {{ user.upvotes }}</h4> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  // import { User } from "../data/user-model";

  interface User {
    id: number
    username: string
    email: string
    images: string[]
    upvotes: {
      cool: number
      clean: number
      creative: number
      productive: number
      original: number
      wow: number
    }
    desctags: string[]
    equipment: string[]
    comments: string[]
  }

  export default defineComponent({
    name: 'Byte',
    // props: {
    //   msg: string
    // }
    data() {
      return {
        isAdmin: true,
        upvoteActive: [true, true, true, true, true, true],
        emojis: ['../assets/emojis/coolEmoji.png'],
        user: {
          id: 1,
          username: 'Nathan Hart',
          email: 'natan.hart1@gmail.com',
          desctags: [],
          images: ['../data/images/desk1.jpeg'],
          upvotes: {
            cool: 2,
            clean: 4,
            creative: 1,
            productive: 2,
            original: 4,
            wow: 5,
          },
          equipment: [],
          comments: [],
        } as User,
      }
    },
    methods: {
      upvoteCool() {
        this.upvoteActive[0]
          ? this.user.upvotes.cool++
          : this.user.upvotes.cool--
        this.upvoteActive[0] = !this.upvoteActive[0]
      },
      upvoteClean() {
        this.upvoteActive[1]
          ? this.user.upvotes.clean++
          : this.user.upvotes.clean--
        this.upvoteActive[1] = !this.upvoteActive[1]
      },
      upvoteCreative() {
        this.upvoteActive[2]
          ? this.user.upvotes.creative++
          : this.user.upvotes.creative--
        this.upvoteActive[2] = !this.upvoteActive[2]
      },
      upvoteOriginal() {
        this.upvoteActive[3]
          ? this.user.upvotes.original++
          : this.user.upvotes.original--
        this.upvoteActive[3] = !this.upvoteActive[3]
      },
      upvoteProductive() {
        this.upvoteActive[4]
          ? this.user.upvotes.productive++
          : this.user.upvotes.productive--
        this.upvoteActive[4] = !this.upvoteActive[4]
      },
      upvoteWow() {
        this.upvoteActive[5] ? this.user.upvotes.wow++ : this.user.upvotes.wow--
        this.upvoteActive[5] = !this.upvoteActive[5]
      },
    },
    computed: {
      totalUpvotes(): number {
        return +Object.values(this.user.upvotes).reduce((a, b) => +a + +b)
      },
      // percentage(): number[] {
      //   return [
      //     (this.user.upvotes.cool / this.totalUpvotes) * 100 +50,
      //     (this.user.upvotes.clean / this.totalUpvotes) * 100 +50,
      //     (this.user.upvotes.creative / this.totalUpvotes) * 100 +50,
      //     (this.user.upvotes.original / this.totalUpvotes) * 100 +50,
      //     (this.user.upvotes.productive / this.totalUpvotes) * 100 +50,
      //     (this.user.upvotes.wow / this.totalUpvotes) * 100 +50,
      //   ];
      // },

      percentage(): number[] {
        return [
          (this.user.upvotes.cool / this.totalUpvotes) * 100 + 50,
          (this.user.upvotes.clean / this.totalUpvotes) * 100 + 50,
          (this.user.upvotes.creative / this.totalUpvotes) * 100 + 50,
          (this.user.upvotes.original / this.totalUpvotes) * 100 + 50,
          (this.user.upvotes.productive / this.totalUpvotes) * 100 + 50,
          (this.user.upvotes.wow / this.totalUpvotes) * 100 + 50,
        ]
      },
      cssVars(): {} {
        return {
          '--widthCool': +this.percentage[0] + '%',
          '--widthClean': +this.percentage[1] + '%',
          '--widthCreative': +this.percentage[2] + '%',
          '--widthOriginal': +this.percentage[3] + '%',
          '--widthProductive': +this.percentage[4] + '%',
          '--widthWow': +this.percentage[5] + '%',
        }
      },
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .byte {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // width: 70%;
    // height: 100%;
  }

  .byte-info {
    width: 70%;
    margin: 1rem;
    border: 2px solid $db-navy;
    border-radius: 5px;
    padding: 1rem;
    .byte-desc {
      .desc-category {
        margin-bottom: 5px;
      }
    }
  }

  .byte-menu {
    flex-direction: column;
    width: 30%;
    height: auto;
    padding: 1rem;
    margin: 1rem;
    // border: 2px solid $border-main;
    border: 2px solid $db-navy;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  }

  .byte-picture {
    max-width: 100%;
    margin: 2px 0px 2px 0px;
    // margin: 1rem;
    .image-main {
      border-radius: 5px;
      max-width: 100%;
      max-height: 100%;
      box-shadow: 0 4px 8px 0 rgba(202, 202, 202, 0.2);
    }
  }

  .votes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .vote-category {
      margin-bottom: 4px;

      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .vote-button {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      // margin-bottom: 0.1rem;
      // min-height: 2rem;

      .emoji {
        width: auto;
        height: 1.5rem;
        transition: $animation;
      }
    }
    .progress-container {
      flex-grow: 1;
      .progress-bar {
        transition: $animation;
        height: 1.3rem;
        background-color: rgb(240, 80, 80);
        background-color: $db-navy-text;
        border-radius: 0px 3px 3px 0px;
      }
      #cool {
        width: var(--widthCool);
        background-color: rgb(52, 65, 179);
        background-color: $db-navy-text;
      }
      #clean {
        width: var(--widthClean);
        background-color: rgb(134, 134, 134);
        background-color: $db-navy-text;
      }
      #creative {
        width: var(--widthCreative);
        background-color: rgb(80, 208, 240);
        background-color: $db-navy-text;
      }
      #original {
        width: var(--widthOriginal);
        background-color: rgb(240, 80, 205);
        background-color: $db-navy-text;
      }
      #productive {
        width: var(--widthProductive);
        background-color: rgb(80, 240, 93);
        background-color: $db-navy-text;
      }
      #wow {
        width: var(--widthWow);
        background-color: rgb(240, 80, 80);
        background-color: $db-navy-text;
      }
    }
    .vote-count {
      transform: scale(1.2);
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin-bottom: 0.1rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }

  button {
    outline: none;
    border: 1.5px solid $db-navy;
    border-radius: 8px 0px 0px 8px;
    padding: 0.2rem;
    width: 9rem;
    background-color: $background-main;
    transition: $animation;
    &:hover {
      .emoji {
        transform: scale(1.3) rotate(20deg);
      }
    }
  }
  .inactive {
    background-color: $db-navy;
    // transform: scale(1.03);
    li {
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 1200px) {
    .byte {
      width: 95%;
    }
  }
</style>
