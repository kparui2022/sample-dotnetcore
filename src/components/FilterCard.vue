<template>
    <div class="filters">
        <div class="lists-tag">
            <span>
                <a href="javascript:void(0);" v-on:click="addClass" :class="{ 'active-red': isAddClassWeb }">Tag <img src="@/assets/icons/arrow-down2.svg" alt="down-arrow" class="down-arrow"><img src="@/assets/icons/arrow-down-red.svg" alt="up-arrow" class="up-arrow"></a>
                <a href="javascript:void(0);" v-on:click="addClassFilter" :class="{ 'active-red': isAddClassWebFilter }">Filter<img src="@/assets/icons/arrow-down2.svg" alt="down-arrow" class="down-arrow"><img src="@/assets/icons/arrow-down-red.svg" alt="up-arrow" class="up-arrow"></a>
            </span>
            <button type="button" class="btn solid orange-btn unable">Search</button>
        </div>                        
        <div class="list-common tag-list"  v-on:click="addClassTag" :class="{ 'active': isAddClassWeb }">
            <div class="dropdown">
                <label>Category</label>
                <select name="" class="item-selector">
                    <option value="Item 1">Select Category</option>
                    <option value="Item 2">Item 2</option>
                </select>
            </div>
            <div class="dropdown">
                <label>Sub Category</label>
                <select name="" class="item-selector">
                    <option value="Item 1">Select Sub Category</option>
                    <option value="Item 2">Item 2</option>
                </select>
            </div>
            <div class="dropdown tag-name">
                <label>Tag Name</label>
                <input type="search" placeholder="Search" class="item-selector item-selector-search">
                <div class="tags-show">
                    <span>LOVE TRIANGLE<a href="#"><img src="@/assets/icons/gray-close.svg" alt=""></a></span>
                    <span>Korea<a href="#"><img src="@/assets/icons/gray-close.svg" alt=""></a></span>
                </div>
            </div>
        </div>
        <div class="list-common filter-list" v-on:click="addClassShow" :class="{ 'active': isAddClassWebFilter }">
        <div class="filter-dropdown-menu">
        <ul class="filter-drop-innr">
            <li class="filter-drop-left">
                <p>Genres</p>
                <div class="select-fl-innr">
                    <select class="select-style">
                        <option>Select Genres</option>
                        <option>Select Genres</option>
                        <option>Select Genres</option>
                    </select>
                </div>
            </li>
            <li class="filter-drop-left">
                <p>Certification</p>
                <ul class="filter-radio-list">
                    <li>
                        <label class="filter-radio">
                            <input type="radio" checked="checked" name="radio">
                            <span class="checkmark">Exempt</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio"  name="radio">
                            <span class="checkmark">ALL</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio"  name="radio">
                            <span class="checkmark">7</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio"  name="radio">
                            <span class="checkmark">12</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio"  name="radio">
                            <span class="checkmark">15</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio"  name="radio">
                            <span class="checkmark">19</span>
                        </label>
                    </li>
                </ul>
            </li>
            <li class="filter-drop-left">
                <p>Country</p>
                <div class="select-fl-innr">
                    <select class="select-style">
                        <option>Korea</option>
                        <option>South Korea</option>
                        <option>Switzerland</option>
                        <option>Singapore</option>
                        <option>France</option>
                    </select>
                    <div class="tags-show">
                        <span>South Korea<a href="#"><img src="@/assets/icons/gray-close.svg" alt=""></a>
                        </span><span>Switzerland<a href="#"><img src="/src/assets/icons/gray-close.svg" alt=""></a></span>
                        <span>Singapore<a href="#"><img src="@/assets/icons/gray-close.svg" alt=""></a></span>
                        <span>	France<a href="#"><img src="@/assets/icons/gray-close.svg" alt=""></a></span>
                    </div>
                </div>
            </li>
            <li class="filter-drop-left">
                <p> Webtoon Uploading Date</p>
                <ul class="filter-radio-list">
                    <li>
                        <label class="filter-radio">
                            <input type="radio" checked="checked" name="radio1">
                            <span class="checkmark">Mon</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Tue</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Wed</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Thu</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Fri</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Sat</span>
                        </label>
                    </li>
                    <li>
                        <label class="filter-radio">
                            <input type="radio" name="radio1">
                            <span class="checkmark">Sun</span>
                        </label>
                    </li>
                </ul>
            </li>
            <li class="filter-drop-left">
                <p>Watch</p>
                <ul class="ic-list">
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/webtoon-icon.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic1.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label> 
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic2.png" alt="" />
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic3.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic4.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic5.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic6.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic7.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic8.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label class="fliter-check"> <img src="@/assets/images/ic9.png" alt="" />
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                </ul>
                </li>
                <li class="filter-drop-left">
                <p> Release Dates</p>
                <div class="date-input">
                    <div class="date-input-innr">
                        <input type="text" placeholder="May 30, 2022" onfocus="(this.type='date')" />
                        <span>
                            <img src="@/assets/icons/calendar.svg" class="dark-th" alt="" />
                            <img src="@/assets/icons/date-blk.svg" class="light-th" alt="" />
                        </span>
                    </div>
                    <span class="md-ic">~</span>
                    <div class="date-input-innr">
                        <input type="text" placeholder="May 30, 2022" onfocus="(this.type='date')" />
                        <span>
                            <img src="@/assets/icons/calendar.svg" class="dark-th" alt="" />
                            <img src="@/assets/icons/date-blk.svg" class="light-th" alt="" />
                        </span>
                    </div>
                </div>
                </li>
            </ul>
          </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'FilterCard',
        data() {
            return {
                isAddClassWeb: false,
                isAddClassWebFilter: false,
            };
        },
        methods: {
            addClass: function () {
                this.isAddClassWebFilter = false;
                this.isAddClassWeb = !this.isAddClassWeb;
            },
            addClassFilter: function () {
                this.isAddClassWeb = false;
                this.isAddClassWebFilter = !this.isAddClassWebFilter;
            },
            addClassTag: function () {
                this.isAddClassWeb = isAddClassWeb;
            },
            addClassShow: function () {
                this.isAddClassWebFilter = isAddClassWebFilter;
            },
        },
    }
</script>