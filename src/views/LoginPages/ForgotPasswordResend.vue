<template>
    <div class="login-wrap">
        <div class="small-container">
            <div class="box">
                <h2>Find Password</h2>
                <p>Enter your email address below and we will send you a link to reset or create your password.</p>
                <form>
                    <div class="form-group">
                        <div class="group">
                            <input type="email" value="email@email.com" class="form-control" />
                            <a href="#" class="btn verify-btn resend">Re-send</a>
                        </div>
                        <!-- <span class="error-txt">This is a required field.</span> -->
                    </div>
                    <div class="form-group">
                        <div class="group">
                            <div class="time-group">
                                <input type="text" placeholder="Please enter the verification code" class="form-control" />
                                <span class="time">2:59</span>
                            </div>
                            <a href="#" class="btn verify-btn resend">Check</a>
                        </div>
                    </div>
                    <div class="btn-innr">
                        <input type="submit" class="btn" value="Check" />
                    </div>
                    <div class="btm-txt">Already have an account? <a href="#" class="frgt-txt">Login in here.</a></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ForgotPasswordResend',
    }
</script>