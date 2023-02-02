<template>
    <div class="people-details-sec" style="background-image:url(../../../src/assets/images/cartoon-back.jpg);">
        <div class="container">
            <div class="people-dtl-otr">
                <div class="people-dtl-left">
                    <figure><img src="@/assets/images/cartoon-pic.jpg" alt="" /></figure>
                </div>
                <div class="people-dtl-right flex-dr">
                    <div class="edit-otr">
                        <h2 class="big-hdr">Lee Dong Gun</h2>
                        <div class="edit-innr">
                            <a href="#" class="btn">Edit</a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/wishlist.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon1.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/star-outline.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon2.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/settings.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>
                    <ul class="people-date-list">
                        <li>Jun 04.1982</li>
                        <li>
                            Cartoonist
                        </li>
                        <li>Male</li>
                        <li>Korea</li>
                        <li>Likes : 13,153</li>
                    </ul>
                    <div class="detl-bt-content">

                        <h5>Biography</h5>
                        <p>No overview has been added yet.</p>
                        <h5>A.K.A</h5>
                        <p>조정석, Jo Jung Seok, Jo Jung Sok</p>
                        <div class="awd-list-outr">
                            <ul class="award-list">
                                <li><span><img src="@/assets/icons/award.svg" alt="" /></span> <em>AWARD</em></li>
                                <li>
                                    <ul>
                                        <li>2 Wins </li>
                                        <li>1 Nominations</li>
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
                <div class="people-details-btm-left">
                    <h2 class="mb-10 small-hdr">Media</h2>
                    <MediaSection />
                    <div class="work-otr mr-bb2">
                         <h2 class="mb-10 small-hdr">Works</h2>
                         <div class="tab-outr small w-auto">
                            <TabWrapper>
                                <Tabs title="Toons">
                                    <select class="form-control select-style">
                                        <option>Crew (9 Credits)</option>
                                        <option>Cast (9 Credits)</option>
                                    </select>
                                    <div class="divider"></div>
                                    <h5>2022</h5>
                                    <div class="image-otr">
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        
                                    </div>
                                    <div class="divider"></div>
                                    <h5>2015</h5>
                                    <div class="image-otr">
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                        <ToonsCard />
                                    </div>
                                </Tabs>
                            </TabWrapper>
                        </div>
                        <h2 class="mb-10 small-hdr mr-100">Community</h2>
                         <CommunityCard />
                    </div>    
                </div>
                <div class="people-details-btm-right">
                    <h2 class="mb-10 small-hdr">Social Media</h2>
                    <SocialIconCard />
                    <h2 class="mb-10 small-hdr">Known For</h2>
                    <div class="slider-otr flex">
                        <SliderContent />
                        <SliderContent />
                    </div>
                    
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
import MediaSection from "@/components/Details/MediaSection.vue";
import ToonsCard from "@/components/Details/ToonsCard.vue";
import CommunityCard from "@/components/CommunityCard.vue";
import SocialIconCard from "@/components/SocialIconCard.vue";
import SliderContent from "@/components/SliderContent.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";

export default {
  name: 'PeopleDetailsCartoonist',
  components: {
    Tabs,
    TabWrapper,
    Slider,
    MediaSection,
    ToonsCard,
    CommunityCard,
    SocialIconCard,
    SliderContent,
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