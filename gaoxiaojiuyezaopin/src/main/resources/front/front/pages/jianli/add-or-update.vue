<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">简历唯一编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliUuidNumber" type="text" v-model="ruleForm.jianliUuidNumber" placeholder="简历唯一编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">简历标题</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliName" type="text" v-model="ruleForm.jianliName" placeholder="简历标题"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">姓名</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliXingming" type="text" v-model="ruleForm.jianliXingming" placeholder="姓名"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">求职意向</view>
                    <picker @change="jianliTypesChange" :value="jianliTypesIndex" :range="jianliTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.jianliTypes?ruleForm.jianliValue:"请选择求职意向"}}</view>
                    </picker>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">期望工资</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliXinzi" type="text" v-model="ruleForm.jianliXinzi" placeholder="期望工资"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">学历</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliXueli" type="text" v-model="ruleForm.jianliXueli" placeholder="学历"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">工作经历</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliJingli" type="text" v-model="ruleForm.jianliJingli" placeholder="工作经历"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">性别</view>
                    <picker @change="sexTypesChange" :value="sexTypesIndex" :range="sexTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.sexTypes?ruleForm.sexValue:"请选择性别"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="jianliFileTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">简历文件</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.jianliFile" :src="baseUrl+ruleForm.jianliFile" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">手机号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliPhone" type="text" v-model="ruleForm.jianliPhone" placeholder="手机号"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="jianliPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">照片</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.jianliPhoto" :src="baseUrl+ruleForm.jianliPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">位置</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jianliAddress" type="text" v-model="ruleForm.jianliAddress" placeholder="位置"></input>
            </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">教育经历</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.jiaoyuText" v-model="ruleForm.jiaoyuText" placeholder="教育经历"/>
            </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">实习或工作经历</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.shixiText" v-model="ruleForm.shixiText" placeholder="实习或工作经历"/>
            </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">个人介绍</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.gerenText" v-model="ruleForm.gerenText" placeholder="个人介绍"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					yonghuId: false,
					jianliUuidNumber: true,
					jianliName: false,
					jianliXingming: false,
					jianliTypes: false,
					jianliXinzi: false,
					jianliXueli: false,
					jianliJingli: false,
					sexTypes: false,
					jianliFile: false,
					jianliPhone: false,
					jianliPhoto: false,
					jianliAddress: false,
					jiaoyuText: false,
					shixiText: false,
					gerenText: false,
					createTime: false,
        },
            ruleForm: {
					yonghuId: '',
					jianliUuidNumber: this.getUUID(),//数字
					jianliName: '',
					jianliXingming: '',
					jianliTypes: '',//数字
					jianliValue: '',//数字对应的值
					jianliXinzi: '',
					jianliXueli: '',
					jianliJingli: '',
					sexTypes: '',//数字
					sexValue: '',//数字对应的值
					jianliFile: '',
					jianliPhone: '',
					jianliPhoto: '',
					jianliAddress: '',
					jiaoyuText: '',
					shixiText: '',
					gerenText: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				jianliTypesOptions: [],
							jianliTypesIndex : 0,
				sexTypesOptions: [],
							sexTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let jianliTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'jianli_types',
            }
			let jianliTypes = await this.$api.page(`dictionary`, jianliTypesParams);
			this.jianliTypesOptions = jianliTypes.data.list
		/*下拉框*/
			let sexTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'sex_types',
            }
			let sexTypes = await this.$api.page(`dictionary`, sexTypesParams);
			this.sexTypesOptions = sexTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`jianli`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.jianliId){
                this.ruleForm.jianliId = options.jianliId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            jianliTypesChange(e) {
                this.jianliTypesIndex = e.target.value
                this.ruleForm.jianliValue = this.jianliTypesOptions[this.jianliTypesIndex].indexName
                this.ruleForm.jianliTypes = this.jianliTypesOptions[this.jianliTypesIndex].codeIndex
            },
            sexTypesChange(e) {
                this.sexTypesIndex = e.target.value
                this.ruleForm.sexValue = this.sexTypesOptions[this.sexTypesIndex].indexName
                this.ruleForm.sexTypes = this.sexTypesOptions[this.sexTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			jianliFileTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.jianliFile = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			jianliPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.jianliPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.jianliUuidNumber)) {
                    this.$utils.msg(`简历唯一编号不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliName)) {
                    this.$utils.msg(`简历标题不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliXingming)) {
                    this.$utils.msg(`姓名不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliXinzi)) {
                    this.$utils.msg(`期望工资不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliXueli)) {
                    this.$utils.msg(`学历不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliJingli)) {
                    this.$utils.msg(`工作经历不能为空`);
                    return
                }
				if ((!this.ruleForm.sexTypes)) {
                    this.$utils.msg(`性别不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliPhone) && (!this.$validate.isMobile(this.ruleForm.jianliPhone))) {
                    this.$utils.msg(`手机号不能为空并且需要输入正确格式`);
                    return
                }
				if ((!this.ruleForm.jianliPhoto)) {
                    this.$utils.msg(`照片不能为空`);
                    return
                }
				if ((!this.ruleForm.jianliAddress)) {
                    this.$utils.msg(`位置不能为空`);
                    return
                }
				if ((!this.ruleForm.jiaoyuText)) {
                    this.$utils.msg(`教育经历不能为空`);
                    return
                }
				if ((!this.ruleForm.shixiText)) {
                    this.$utils.msg(`实习或工作经历不能为空`);
                    return
                }
				if ((!this.ruleForm.gerenText)) {
                    this.$utils.msg(`个人介绍不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`jianli`, this.ruleForm);
                } else {
                    await this.$api.save(`jianli`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>