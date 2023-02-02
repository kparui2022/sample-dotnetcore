<template>
    <div class="my-accout-otr">
        <div class="large-container">
            <div class="my-accout-box">
                <h2>Delete My Account</h2>
                <p>Before deleting your account , be sure to check the followings bellow.</p>
                <ul>
                    <li>The account won’t be recovered if you delete your account</li>
                    <li>Comments and registered/modified information data remain even after you delete your account. The basic information of the work/person entered  belongs to the 11db company.</li>
                    <li>All information or data that the company is obligated to keep in accordance with relevant laws will be deleted, and the deleted data will not be recovered.</li>
                </ul>
                <div class="login-wrap p-o">
                    <div class="form-box box">
                        <form>
                            <div class="form-group mb-24">
                                <label>Reason for withdrawl</label>
                                <textarea placeholder="Please enter the reason for withdrawal." class="form-control"></textarea>
                            </div>
                            <div class="btn-otr">
                                <div class="btn-innr">
                                    <a href="#" class="btn outline red">Delete</a>
                                </div>
                                <div class="btn-innr">
                                    <a href="#" class="btn solid orange-btn">Cancel</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyPageWithdrawal',  
};
</script>

