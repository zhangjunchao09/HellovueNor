<template>
    <div class="about">
        <span style="display: block;margin-bottom: 0.75rem;">{{ msg }}</span>
        <span style="display: block;margin-bottom: 0.75rem;">a+ b = count = {{ count = a + b }}</span>
        <div style="margin-bottom: 12px;">
            <input v-bind:value="a" /> <button v-on:click="addA()" style="margin-right: 12px;">addA</button>
        </div>
        <div>
            <input v-bind:value="b" /> <button v-on:click="addB()" style="margin-right: 12px;">addB</button>
        </div>

        <div style="width: 900px; text-align: center;margin-left: 120px;">
            <table>
                <tr v-for="item in listData" :key="item.lawEffectId">
                    <td v-for="(val, key) in item" :key="key">{{val }}</td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import Api from '../api/index.js';
    export default {
        name: 'About',
        data() {
            return {
                msg: 'Hello Vue!',
                count: 2,
                a: 1,
                b: 1,
                listData: []
            }
        },
        methods: {
            addA() {
                this.a++;
            },
            addB() {
                this.b++;
            },
            getData() {
                var params = {};
                Api.post('/search', params, (res) => {
                    if (res.status == 200) {
                        if (res.data.articles.length) {
                            this.listData = res.data.articles;
                        }
                    }
                })
            }
        },
        created() {
            this.getData();
            var $this = this;
            setInterval(function(){
                console.log('setInterval')
                $this.addB();
            },10000)
        }
    };
</script>

<style>
    
table tr td {
    width: 100px;
    overflow: hidden;
    white-space:nowrap ;
}

</style>
