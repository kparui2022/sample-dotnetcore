<template>
    <div class="exception-body error">
        <div class="exception-content">
            <div class="privacy-policy-outer">
                <h4>제1조 [목적]</h4>
                <p class="new-one">
                    본 이용약관은 (주)치읓(이하 “회사“)에서 제공하는 음성기반 책모임 서비스인 “ㅊㅊㅊ 앱” 및 “ㅊㅊㅊ”에서 제공하는 제반 서비스(이하 “서비스”)의 이용과 관련하여 회사와 이를 이용하는 이용자(이하 “회원“)와의 서비스 이용에 관한 권리 및
                    의무와 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
                </p>
                <h4>제2조 [용어의 정의]</h4>
                <p class="new">(1) 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <p class="new">1. 서비스: 휴대형 단말기, 전기통신설비 등 포함 어플리케이션을 통해 회사가 회원이 이용할 수 있도록 제공하는 “ㅊㅊㅊ” 및 “ㅊㅊㅊ” 관련 제반 서비스를 의미합니다.</p>
                <p class="new">2.회원: 회사에 개인정보를 제공하여 회원등록을 한 자로서 이 약관에 따라 회사와 서비스이용계약을 체결한 자를 말합니다.</p>
                <p class="new">3. 아이디: 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 회사가 승인한 이메일을 말합니다.</p>
                <p class="new">4. 비밀번호: 회원의 동일성 확인과 회원의 권익 및 비밀보호를 위하여 회원 스스로가 설정하여 회사에 등록한 영문 또는 숫자의 조합을 말합니다.</p>
                <p class="new">5. 콘텐츠: 회사가 제공하는 디지털 콘텐츠 및 기타 관련 정보(부호, 문자, 음성, 음향, 이미지, 영상 등으로 표현된 자료 또는 정보)를 말합니다.</p>
                <p class="new">(2) T제1항에서 정의되지 않은 본 약관상의 용어의 의미는 서비스 관련 개별 운영정책 및 일반적인 거래관행에 의합니다.</p>
                <h4>제3조 [약관의 게시와 효력, 개정]</h4>
                <p class="new">(1) 회사는 회사의 서비스 앱 초기 화면 또는 연결화면에 본 약관을 게시하거나 기타의 방법으로 고지합니다. 본 약관은 서비스이용을 원하는 자가 본 약관에 동의하면서 회원으로 가입함으로써 효력이 발생합니다.</p>
                <p class="new">
                    (2) 회사는 약관의 규제에 관한 법률, 콘텐츠산업 진흥법, 전자문서 및 전자거래 기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전자상거래 등에서의 소비자보호에 관한 법률, 유사수신행위의 규제에 관한 법률 등
                    관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                </p>
                <p class="new">
                    (3) 본 이용약관은 개정될 수 있으며 약관을 개정할 경우 회사는 개정된 약관을 적용하는 날(이하 “효력 발생일“)로부터 7일 이전에 약관이 개정된다는 사실과 개정된 내용을 앱 화면 게시를 통해 공지합니다. 단, 회원의 권리와 의무에 중대한
                    영향을 주는 변경의 경우에는 적용일자 30일 전부터 공지합니다.
                </p>
                <p class="new">
                    (4) 회원이 위 약관에 동의하지 않을 경우 회사에서 제공하는 서비스 이용 중단 및 탈퇴 페이지에서 의사를 표시하고 서비스 이용종료를 요청할 수 있습니다. 다만, 회사가 회원에게 변경된 약관의 내용을 통보한 경우 회원이 위 통보일로부터 30일
                    이내 거부의 의사표시를 하지 아니한 경우 회원이 변경된 약관에 동의하는 것으로 봅니다.
                </p>
                <p class="new">(5) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 일반 상 관례에 따릅니다.</p>
            </div>
            <div class="exception-footer"></div>
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
