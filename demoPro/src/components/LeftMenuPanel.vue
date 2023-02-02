<template>
  <div class="left-panel-menu">
    <div class="left-menu">
      <ul>
        <li class="complete" @click="fetchMenuData('primary')">
          <a>Primary Details</a>
        </li>
        <li
          :class="selectedMenu == 'media' ? 'active' : ''"
          @click="fetchMenuData('media')"
        >
          <a>Media</a>
        </li>
        <li
          :class="selectedMenu == 'credit' ? 'active' : ''"
          @click="fetchMenuData('credit')"
        >
          <a>Credit</a>
        </li>
        <li
          :class="selectedMenu == 'tags' ? 'active' : ''"
          @click="fetchMenuData('tags')"
        >
          <a>Tags</a>
        </li>
      </ul>
    </div>

    <button class="submit-movie-form" type="submit">Submit all Data</button>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
export default {
  name: "LeftMenuPanel",
  data() {
    return {
      menus: [
        { message: "Primary Details" },
        { message: "Media" },
        { message: "Credit" },
        { message: "Tags" },
      ],
      activeIndex: undefined,
      active: false,
    };
  },
  props: {
    selectedMenu: String,
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
  setup(props, { emit }) {
    const fetchMenuData = (val) => {
      emit("movieMenudata", val);
    };
    return {
      fetchMenuData,
    };
  },
};
</script>