<template>
    <div class="user-detail">
        <div class="user-detail-container" v-for="detail in userDetailInfo" :key="detail">
            <div class="user-name">                
                Name: {{ detail.name.last }} {{ detail.name.first }}
            </div>
            <div class="user-email">
                Email: {{ detail.email }}
            </div>
            <div class="user-dob">
                DOB: {{ detail.dob.date }}
            </div>
            <div class="user-gender">
                Gender: {{ detail.gender }}
            </div>
            <div class="user-address">
                Address: {{ detail.location.city }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        computed: {
        // mapState({
        //     userDetailInfo: state => state.userSelected
        // }),
        ...mapGetters (['userDetailInfo']),        
        }
    }
</script>

<style lang="scss" scoped>
</style>
