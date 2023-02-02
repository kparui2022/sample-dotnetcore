<template>
  <div class="togglesdrop" @click="toggle = !toggle">
    <p>{{selectText}}</p>
    <span class="arows">
      <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8346 0.5L7.0013 6.33333L1.16797 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </div>
  <div class="watch-list-area" v-show="toggle">
    <ul>
      <li v-for="(list, i) in ottList" :key="i">
        <span>{{ list.ott_service_provider_name }}</span>
        <a @click="addItem(list)">Add +</a>
      </li>
    </ul>
  </div>
  <div class="selectTags-area">
    <div class="watchTags" v-for="(item, i) in belowList" :key="i">
      <div class="icon-txt">
        <img :src="item.ott_logo_path" />
        <!-- <span></span> -->
        <input
          type="text"
          placeholder="Enter movie ID"
          @change="addInputItem($event, item)"
        />
      </div>
      <div class="corss" @click="removeItem(item)">
        <img src="@/assets/icons/close.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "WatchStream",
  data() {
    return {
      toggle: false,
    };
  },
  props: {
    ottList: Array,
    selectText: String
  },
  emits:['watchInput'],
  setup(props, { emit }) {
    const belowList = ref([]);
    const addedList = ref([]);

    const addItem = (item) => {
      let data = belowList.value.find((f) => {
        return f.ott_service_provider_id == item.ott_service_provider_id;
      });
      if (!data) {
        belowList.value.push(item);
        addedList.value.push({
          ott_provider_id: item.ott_service_provider_id,
          ott_provider_provided_id: "",
        });
        emit("watchInput", addedList.value);
      }
    };

    const removeItem = (item) => {
      let data = belowList.value.find((f) => {
        return f.ott_service_provider_id == item.ott_service_provider_id;
      });
      if (data) {
        belowList.value.splice(belowList.value.indexOf(item), 1);

        for (let j = 0; j < addedList.value.length; j++) {
          if (
            addedList.value[j].ott_provider_id == item.ott_service_provider_id
          ) {
            addedList.value.splice(j, 1);
          }
        }
        emit("watchInput", addedList.value);
      }
    };

    const addInputItem = (event, item) => {
      let data = addedList.value.find((f) => {
        return f.ott_provider_id == item.ott_service_provider_id;
      });
      if (data) {
        data.ott_provider_provided_id = event.target.value;
        emit("watchInput", addedList.value);
      }
    };

    return {
      addItem,
      belowList,
      removeItem,
      addInputItem,
    };
  },
};
</script>