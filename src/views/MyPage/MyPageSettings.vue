<template>
    <section class="mypage-sec">
        <div class="container">
            <div class="mypage-wrapper">
                <LeftSidePanel />
                <div class="mypage-rght">
                    <h2>Settings</h2>
                    <div class="login-wrap p-o">
                        <div class="form-box box">
                            <form>
                                <div class="form-group mb-24">
                                    <label>Profile Image</label>
                                    <div class="file">
                                        <input type="file" placeholder="" class="file-input__input" />
                                        <div class="file-txt"><img src="@/assets/icons/edit.svg" alt="" /> <span>Edit</span></div>
                                    </div>
                                    <p class="b-txt">*For best results, Upload a high resolution image.</p>
                                </div>
                                <div class="form-group mb-24">
                                    <label>Name</label>
                                    <input type="text" placeholder="Username" class="form-control" />
                                </div>
                                <div class="form-group mb-24">
                                    <label>E-mail</label>
                                    <input type="email" placeholder="hong@naver.com" class="form-control" />
                                </div>
                                <div class="form-group mb-24">
                                    <label>Password</label>
                                    <a href="#" class="btn outline red">Change Password</a>
                                </div>
                                <div class="form-group">
                                    <label>Language</label>
                                    <div class="radio-otr">
                                        <label class="radio-input">English
                                            <input type="radio" checked name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-input">한국어
                                            <input type="radio" name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="btn-innr mb-15">
                                    <a href="#" class="btn solid orange-btn">Save changes</a>
                                </div>
                                <p class="b-txt">Do you want to cancel membership? <a @click="$router.push('/my-page/withdrawal')" class="frgt-txt">Withdrawal</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import LeftSidePanel from "@/components/MyPage/LeftSidePanel.vue";

export default {
  name: 'MyPageSettings',  
  components: {
    LeftSidePanel
  }
};
</script>