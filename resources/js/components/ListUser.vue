<template>
    <div class="list-user">
        <table class="tbl-list-user">
            <thead>
                <th>Name</th>
                <th>Location</th>
                <th>DOB</th>
            </thead>
            <tbody>
                <tr v-for="user in userData" :key="user.id"> 
                    <!-- This line below -->
                    <td><div @click="selectUser(user.id)">{{ user.name.title }} - {{ user.name.last }} {{ user.name.first }}</div></td>
                    <td>{{ user.location.city }}</td>
                    <td>{{ user.dob.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default {
        // computed: {
        //     userData() {
        //         return this.$store.state.userData
        //     }
        // },
        computed: mapState({
            userData: state => state.userData
        }),

        methods: {
            // ...mapActions(['selectUser']),
            // ...mapMutations(['SELECT_USER']),
            
            selectUser(userId) {
                this.$store.dispatch('selectUser', userId)
            }            
        }
    }
</script>

<style lang="scss" scoped>
	.tbl-list-user {
		width: 100%;
	}
</style>
