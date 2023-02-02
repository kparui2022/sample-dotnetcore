<template>
    <div class="exception-body error">
        <!-- <div class="exception-topbar">
            <a id="logolink" @click="goDashboard" class="layout-topbar-logo">
                <img :src="'assetss/layout/images/logo-' + (colorScheme === 'dark' ? 'freya-whites' : 'freyas') + '.svg'" alt="Samsung Account-Book"/>
            </a>
        </div> -->
        <div class="exception-wrapper">
            <div class="exception-content">
                <!-- <div  class="title-new">
<h3 class="title">privacy policy</h3>
<img src="assets/layout/images/cross.svg" class="cross"  @click="$router.go(-1)"/>
</div> -->
                <div class="privacy-policy-outer">
                    <h4>제 1조 개인정보 처리방침이란?</h4>
                    <p class="new-one">
                        (주)치읓(이하 "회사")은 이용자의 동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 이용자의 권리 (개인정보자기결정권)를 적극적으로 보장합니다. 회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및
                        개인정보보호 규정, 가이드라인을 준수하고 있습니다. "개인정보 처리방침"이란 이용자의 소중한 개인정보를 보호하여 안심하고 서비스를 이용할 수 있도록 회사가 서비스를 운영함에 있어 준수해야 할 지침을 말합니다.
                    </p>
                    <h4>제 2조 개인정보의 수집 및 이용 목적</h4>
                    <p class="new">1. 이용자로부터 다음과 같은 개인정보를 수집하고 있습니다.</p>
                    <div class="privacy-border">
                        <p>
                            모든 이용자는 회사가 제공하는 서비스를 이용할 수 있고, 회원가입을 통해 더욱 다양한 서비스를 제공받을 수 있으며, 아래의 원칙을 준수하고 있습니다. 수집한 이용자의 개인정보는 다음과 같은 목적으로만 이용하며, 목적이 변경될
                            경우에는 반드시 사전에 이용자에게 동의를 구하도록 하겠습니다.
                        </p>
                        <p>
                            ① 서비스 제공에 필요한 최소한의 개인정보를 수집하고 있습니다. 필수정보란? : 해당 서비스의 본질적 기능을 수행하기 위한 정보 선택정보란? : 보다 특화된 서비스를 제공하기 위해 추가 수집하는 정보 (선택 정보를 입력하지 않은
                            경우에도 서비스 이용 제한은 없습니다.)
                        </p>
                        <p>
                            ② 민감정보를 수집하지 않습니다. 민감정보란? : 이용자의 소중한 인권을 침해할 우려가 있는 정보 (인종, 사상 및 신조, 정치적 성향이나 범죄기록, 의료정보 등) 단, 법령에서 민감 정보의 처리를 요구하거나 허용하는 경우에는 반드시
                            사전에 이용자에게 해당 사실을 알리고 동의를 구하도록 하겠습니다.
                        </p>
                    </div>

                    <p>1) 회원 가입 및 고객 관리 (1) 수집 목적: 자체 서비스 회원가입, 휴대전화 번호 인증, 고객관리 (2) 필수 수집항목: 이름, 닉네임, 이메일 주소, 휴대전화 번호, (3) 선택 수집항목 : 자기 소개 문구 (4) 보유 및 이용기간 : 회원탈퇴 시</p>

                    <p>
                        2)서비스 이용 및 관리 (1) 수집 목적: 서비스 콘텐츠 개발 및 품질 향상, 부정이용자 모니터링, 영구 계정 정지 이용자 재가입 방지 (2) 필수 수집항목 : 대화내용(음성), 자동 수집 및 생성 정보, 영구 계정 정지자의 경우 이메일 주소,
                        이름(3) 보유 및 이용기간 : 회원 탈퇴 시(영구 계정정지 이용자 이메일 주소 및 이름은 서비스 이용정책에 따라 영구보존)
                    </p>

                    <p>
                        3) 서비스 이용에 따른 자동 수집 및 생성 정보 (1) 수집 목적 : 서비스 이용 기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 맞춤형 서비스 제공, 서비스 개선에 활용(2) 필수 수집항목 : 접속IP주소, 쿠키, 방문 일시, 지불정보 및 기록,
                        서비스 이용 기록, 불량 이용 기록, 접속 기기 정보(단말기 모델명 및 단말식별번호, OS(Android/iOS) 및 버전, 브라우저 종류) ※ 개인을 식별할 수 있는 정보는 분석항목에 포함하지 않습니다. (3)보유 및 이용기간 : 데이터 분석 목적 달성
                        시
                    </p>

                    <p>4) 고객문의 (1) 수집 목적 : 서비스 문의에 대한 응대 (2) 필수 수집항목: 이메일 주소, 문의 내용 (3) 보유 및 이용기간 : 회원 탈퇴 시</p>

                    <p>
                        2. 회사가 이용자의 개인정보를 수집하는 경우에는 반드시 사전에 이용자에게 해당 사실을 알리고 동의를 구하도록 하겠습니다. 수집방법에는 회원가입, 서비스 이용, 이벤트 응모, 고객센터, 팩스, 전화 등이 있으며, 이용자가 동의버튼을
                        클릭하거나 회원 정보 수정 등을 통해 추가로 수집하는 개인정보를 기재한 후 저장할 경우 개인정보 수집에 동의한 것으로 봅니다.
                    </p>
                </div>
            </div>
            <div class="exception-footer">
                <!-- <h4>Rai Planner</h4>
                <h6>Copyright Ⓒ Rai Planner</h6> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        colorScheme() {
            return this.$appState.colorScheme;
        },
    },
    methods: {
        goDashboard() {
            window.location = '/';
        },
    },
};
</script>
<style scoped>
body {
    background: #fafafa;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; */
}
.title {
    text-align: center;
    padding: 16px 0px;
    /* font-family: 'SUIT'; */
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: #333333;
}

.title-new {
    position: relative;
    background: #fff;
}
.cross {
    position: absolute;
    right: 22px;
    top: 22px;
}

.privacy-policy-outer {
    background: #fafafa;
    padding: 24px 16px 0px;
}
.privacy-policy-outer h4 {
    /* font-family: 'SUIT'; */
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
}

.privacy-policy-outer p {
    /* font-family: 'SUIT'; */
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 38px;
}
.privacy-policy-outer p.new {
    margin-bottom: 0px;
}
.privacy-policy-outer p.new-one {
    margin-bottom: 10px;
}

.privacy-border {
    border: 1px solid #e0e0e0;
    padding: 16px;
}

.confirmbtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 4px;

    height: 44px;
    background: #5140ff;
    border-radius: 8px;
    /* font-family: 'SUIT'; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
}

.round {
    position: relative;
    height: 32px;
    margin: 21px 0px;
    display: flex;
    align-items: center;
}
.round span {
    /* font-family: 'SUIT'; */
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #828282;
    margin-left: 31px;
}

.round label {
    background-color: #5140ff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
}

.round label:after {
    border: 2px solid #cfcfcf;
    border-top: none;
    border-right: none;
    content: '';
    height: 6px;
    left: 7px;

    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
    z-index: 8;
}

.round input[type='checkbox'] {
    visibility: hidden;
}

.round input[type='checkbox']:checked + label {
    background: #fff;
    border-color: #cfcfcf;
    z-index: 999;
}

.round input[type='checkbox']:checked + label:after {
    opacity: 1;
}
</style>
