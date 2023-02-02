<template>
    <div class="people-details-sec">
        <div class="container">
            <div class="people-dtl-otr">
                <div class="people-dtl-left">
                    <figure><img src="@/assets/images/no-data-image.jpg" alt="" /></figure>
                </div>
                <div class="people-dtl-right flex-dr">
                    <div class="edit-otr">
                        <h2 class="big-hdr">Benedict Cumberbatch</h2>
                        <div class="edit-innr">
                            <a href="#" class="btn solid">Edit</a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/wishlist.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon1.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/settings.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>
                    <ul class="people-date-list">
                        <li>Jun 04.1976</li>
                        <li>
                            <ul>
                                <li>Actor</li>
                                <li>Director</li>
                            </ul>
                        </li>
                        <li>Male</li>
                        <li>London, England, UK</li>
                        <li>Likes : 13,153</li>
                    </ul>
                    <div class="detl-bt-content">
                        <h5>Biography</h5>
                        <p>-</p>
                        <h5>A.K.A</h5>
                        <p>-</p>
                        <div class="awd-list-outr">
                            <ul class="award-list">
                                <li><span><img src="@/assets/icons/award.svg" alt="" /></span> <em>AWARD</em></li>
                                <li>
                                    <ul>
                                        <li>0 Wins </li>
                                        <li>0 Nominations</li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="#">
                                <img src="@/assets/icons/arrow-right-wh.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/arrow-right-blk.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    <div class="people-details-btm-sec">
        <div class="container">
            <div class="people-details-btm-otr">
                <div class="people-details-btm-left mbl">
                    <h2 class="mb-10 small-hdr">Media</h2>
                    <div class="no-data-wrapper">
                        <p>No Data</p>
                    </div>
                    <div class="work-otr mr-bb2">
                         <h2 class="mb-10 small-hdr">Works</h2>
                         <div class="tab-outr small">
                            <TabWrapper>
                                <Tabs title="Movie">
                                    <select class="form-control select-style">
                                        <option>Crew (0)</option>
                                        <option>Crew (0)</option>
                                    </select>
                                    <div class="no-data-wrapper mr-top-20">
                                        <p>No Data</p>
                                    </div>
                                </Tabs>
                                <Tabs title="TV">
                                    <p>abc</p>
                                </Tabs>
                            </TabWrapper>
                        </div>
                        <h2 class="mb-10 small-hdr">Community</h2>
                         <div class="tab-outr small four w-auto">
                            <TabWrapper>
                                <Tabs title="Comments">
                                    <div class="share-otr">
                                        <div class="share-input-innr">
                                            <input type="text" class="form-control" placeholder="Share what’s new..." />
                                            <span><img src="@/assets/icons/share-icon.svg" alt=""/></span>
                                        </div>
                                        <input type="submit" class="btn orange-btn" value="Send" />
                                    </div>
                                    <div class="checkbox-inn">
                                        <label class="checkbox-input"> Spoiler
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="no-data-wrapper mr-bottom-0">
                                        <p>No Data</p>
                                    </div>
                                </Tabs>
                                <Tabs title="Trivia">
                                    <p>tab2</p>
                                </Tabs>
                                <Tabs title="Famous Lines">
                                    <p>tab3</p>
                                </Tabs>
                                <Tabs title="Goofs">
                                    <p>tab4</p>
                                </Tabs>
                            </TabWrapper>
                        </div>
                    </div>    
                </div>
                <div class="people-details-btm-right">
                    <GoogleAdd />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TabWrapper from "@/components/TabWrapper.vue";
    import Tabs from "@/components/Tabs.vue";
    import Slider from "@/components/Slider.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";
    
    export default {
      name:'PeopleDetailsNoData',
      components: {
    Tabs,
    TabWrapper,
    Slider,
    GoogleAdd
},
      data() {
        return {
          active: false,
          active2: false
        };
      }
    };
    </script>