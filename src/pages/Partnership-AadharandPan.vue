<template>
  <div>
    <label class="form-label"> Business PAN Upload</label>
    <b-form-file
      ref="panupload"
      label="PAN Number"
      placeholder="No file chosen"
      drop-placeholder="Drop file here..."
      :disabled="hideshowFields.aadharOcr ? true : false"
      @change.native.prevent="panUpload"
    ></b-form-file>
    <div v-if="hideshowFields.panDiv == 1" class="p-3 mt-3 border rounded-lg">
      <div ref="panEdit" class="flex-end mb-3">
        <button
          :disabled="hideshowFields.aadharOcr ? true : false"
          class="_nfl_button"
          @click="
            () => {
              disabledFields.panDisabled = 0;
            }
          "
        >
          Edit
        </button>
      </div>
      <div v-if="hideshowFields.panDiv === 1">
        <div class="flex-row" style="gap: 3rem">
          <!-- <b-form-group
            id="input-pan-3"
            label="First Name"
            label-for="pan-input-3"
          >
            <b-form-input
              id="pan-input-3"
              v-model="panFormFields.firstname"
              placeholder="First Name"
              :disabled="disabledFields.panDisabled == 1"
              type="text"
              required
            ></b-form-input>
          </b-form-group> -->

          <!-- <b-form-group
            id="input-pan-4"
            label="Middle Name"
            label-for="pan-input-4"
          >
            <b-form-input
              id="pan-input-4"
              v-model="panFormFields.middlename"
              placeholder="Middle Name"
              :disabled="disabledFields.panDisabled == 1"
              type="text"
              required
            ></b-form-input>
          </b-form-group> -->

          <!-- <b-form-group
            id="input-pan-5"
            label="Last Name"
            label-for="pan-input-5"
          >
            <b-form-input
              id="pan-input-5"
              v-model="panFormFields.lastname"
              placeholder="Last Name"
              :disabled="disabledFields.panDisabled == 1"
              type="text"
              required
            ></b-form-input>
          </b-form-group> -->
        </div>
        <div class="flex-row" style="gap: 3rem">
          <b-form-group
            id="input-pan-2"
            label="PAN Number"
            label-for="pan-input-2"
          >
            <b-form-input
              id="pan-input-2"
              v-model="panFormFields.pan"
              placeholder="PAN Number"
              :disabled="disabledFields.panDisabled == 1"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-pan-3" label="DOB" label-for="pan-input-3">
            <b-form-input
              id="pan-input-3"
              v-model="panFormFields.dob"
              placeholder="DOB"
              :disabled="disabledFields.panDisabled == 1"
              type="date"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div ref="panSave" class="end">
          <button
            v-if="disabledFields.panDisabled === 0"
            :disabled="hideshowFields.aadharOcr ? true : false"
            class="_nfl_button"
            @click="updatePanDetails()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="hideshowFields.panDiv === 1 && hideshowFields.aadharOcr === 0"
      class="d-flex justify-content-center"
    >
      <button class="_nfl_button" @click="createNewCustomer">Submit</button>
    </div>

    <div v-if="hideshowFields.aadharOcr === 1" class="aadhar-div-start">
      <span class="strong"> Partner Details </span>

      <div class="flex-col">
        <div class="row">
          <div class="col-lg-6">
            <label class="form-label"> Aadhaar Upload Front</label>
            <b-form-file
              :disabled="hideshowFields.bankDiv ? true : false"
              label="Aadhar Front"
              placeholder="No file chosen"
              drop-placeholder="Drop file here..."
              @change.prevent="aadharUpload($event, 'front')"
            ></b-form-file>
          </div>

          <div class="col-lg-6">
            <label class="form-label"> Aadhar Upload Back</label>

            <b-form-file
              :disabled="hideshowFields.bankDiv ? true : false"
              label="Aadhar Back"
              placeholder="No file chosen"
              drop-placeholder="Drop file here..."
              @change.prevent="aadharUpload($event, 'back')"
            ></b-form-file>
          </div>
        </div>

        <div
          v-if="hideshowFields.aadharDiv == 1"
          class="p-3 mt-3 border rounded-lg"
        >
          <!-- <input
            ref="fileinputone"
            type="file"
            style="display: none"
            @change.prevent="aadharUpload"
          />

          <label
            data-browse="Browse"
            class="custom-upload-label"
            style="width: 100%; text-align: right"
            @click="$refs.fileinputone.click()"
            ><span
              class="d-block form-file-text"
              style="pointer-events: none; z-index: 3; text-align: left"
              >No file chosen</span
            ></label
          > -->

          <div ref="aadharEdit" class="flex-end">
            <button
              :disabled="hideshowFields.bankDiv ? true : false"
              class="_nfl_button"
              @click="
                () => {
                  disabledFields.aadharDisabled = 0;
                }
              "
            >
              Edit
            </button>
          </div>

          <!-- <button style="display: none" @click="$refs.fileinputone.click()">
      Upload
      </button> -->
          <div v-if="hideshowFields.aadharDiv === 1">
            <div class="flex-row" style="gap: 3rem">
              <b-form-group
                id="input-group-2"
                label="Aadhar Number"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="aadharFormFields.number"
                  placeholder="Aadhar Number"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <!-- <b-form-group
                id="input-group-3"
                label="Mobile Number"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="aadharFormFields.mobileNumber"
                  placeholder="Mobile Number"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group> -->
            </div>
            <div class="flex-row" style="gap: 3rem">
              <b-form-group
                id="input-group-4"
                label="House Number"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="aadharFormFields.houseNumber"
                  placeholder="House Number"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                label="Street"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="aadharFormFields.street"
                  placeholder="Street"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-6"
                label="Landmark"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="aadharFormFields.landmark"
                  placeholder="Landmark"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="flex-row" style="gap: 3rem">
              <b-form-group
                id="input-group-7"
                label="Locality"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="aadharFormFields.locality"
                  placeholder="Locality"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-8"
                label="Line1"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="aadharFormFields.line1"
                  placeholder="Line1"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-9"
                label="Line2"
                label-for="input-9"
              >
                <b-form-input
                  id="input-9"
                  v-model="aadharFormFields.line2"
                  placeholder="Line2"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="flex-row" style="gap: 3rem">
              <b-form-group
                id="input-group-10"
                label="City"
                label-for="input-10"
              >
                <b-form-input
                  id="input-10"
                  v-model="aadharFormFields.city"
                  placeholder="City"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-11"
                label="State"
                label-for="input-11"
              >
                <b-form-input
                  id="input-11"
                  v-model="aadharFormFields.state"
                  placeholder="State"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-11"
                label="Pincode"
                label-for="input-11"
              >
                <b-form-input
                  id="input-11"
                  v-model="aadharFormFields.pincode"
                  placeholder="Pincode"
                  :disabled="disabledFields.aadharDisabled == 1"
                  type="number"
                  required
                  @change="
                    /^(\d{4}|\d{6})$/.test(aadharFormFields.pincode)
                      ? handlePinCodeChange()
                      : null
                  "
                ></b-form-input>
              </b-form-group>
            </div>
            <div>
              <label>Address</label>
              <b-form-textarea
                id="textarea"
                v-model="aadharFormFields.address"
                placeholder="Address"
                rows="3"
                max-rows="6"
                :disabled="disabledFields.aadharDisabled == 1"
              ></b-form-textarea>
            </div>
            <div v-if="disabledFields.aadharDisabled == 0" class="end">
              <button
                :disabled="hideshowFields.bankDiv ? true : false"
                class="_nfl_button"
                @click="updateAadharDetails()"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="hideshowFields.bankDiv === 1"
      ref="bnkStmt"
      class="flex-col mt-3"
    >
      <label class="form-label"> Bank Statement</label>

      <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal> -->

      <b-button class="_nfl_button" @click="perfiosStartProcess"
        >Upload Bank Statement</b-button
      >
    </div>

    <div class="mt-4">
      <b-form-checkbox
        v-if="hideshowFields.aadharDiv === 1"
        id="checkbox-1"
        v-model="checkedFields.termsAgreement"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        I accept the
        <nuxt-link to="/niyogin/terms-condition" target="_blank">
          terms and conditions
        </nuxt-link>
      </b-form-checkbox>
    </div>

    <!-- Verification OTP pop-uo start -->

    <!-- <div
      v-if="hideshowFields.aadharDiv === 1 && hideshowFields.bankDiv === 0"
      class="flex-center mt-2"
    >
      <button class="mxy-auto _nfl_button" @click="checkEligibility">
        Check Eligibility
      </button>
    </div> -->

    <div
      v-if="hideshowFields.aadharDiv === 1 && hideshowFields.bankDiv === 0"
      ref="eligibilityButton"
      class="flex-center mt-2"
    >
      <button class="mxy-auto _nfl_button" @click="checkEligibility">
        Check Eligibility
      </button>
    </div>

    <!-- Verification OTP pop-uo end -->
    <div v-if="filesArray.bankFile != null" class="mt-2">
      <label>Eligibility Amount </label>

      <div
        v-if="hideshowFields.perfiosStatementDiv === 1"
        style="min-height: 10rem"
        class="border rounded-lg"
      >
        <b-spinner
          style="margin-left: 47%; margin-top: 4%; height: 5rem; width: 5rem"
          variant="primary"
          label="Spinning"
        ></b-spinner>
      </div>
      <div v-else class="border rounded-lg">
        <div class="mt-2 ml-2 mb-2">
          You are eligible upto Rs. {{ perfiosAmount.AABAmount }}
          <button
            class="_nfl_button"
            data-toggle="modal"
            data-target="#modal-1"
            @click="
              () => {
                hideshowFields.otpDiv = 1;
                loanDetails.loanAmount = perfiosAmount.AABAmount;
              }
            "
          >
            Apply Now
          </button>

          <div style="margin-top: 1rem">
            <!-- {{ perfiosAmount.FFEAmount }} -->
            For higher amount
            <button
              class="_nfl_button"
              data-toggle="modal"
              data-target="#modal-1"
              @click="hideshowFields.otpDiv = 1"
            >
              Click Here
            </button>
          </div>
        </div>
        <!-- <div class="flex-col" style="--min: 0; --max: 10000">
          <p>You are eligible for Rs. {{ perfiosAmount.rangeValue }}</p>
          <input
            v-model="value"
            style="width: 20rem"
            type="range"
            min="0"
            max="3000000"
          />
        </div> -->

        <div
          v-if="hideshowFields.otpDiv === 1"
          id="modal-1___BV_modal_outer_"
          style="position: absolute; z-index: 200; color: black; display: block"
        >
          <div
            id="modal-1"
            role="dialog"
            aria-labelledby="modal-1___BV_modal_title_"
            aria-describedby="modal-1___BV_modal_body_"
            class="modal fade show"
            aria-modal="true"
            style="display: block; padding-left: 17px"
          >
            <div class="modal-dialog modal-md">
              <span tabindex="0"></span>
              <div
                id="modal-1___BV_modal_content_"
                tabindex="-1"
                class="modal-content"
              >
                <header id="modal-1___BV_modal_header_" class="modal-header">
                  <h2
                    id="modal-1___BV_modal_title_"
                    class="modal-title d-flex justify-content-center"
                  >
                    Loan Details
                  </h2>
                  <button
                    type="button"
                    aria-label="Close"
                    class="close"
                    @click="
                      () => {
                        hideshowFields.otpDiv = 0;
                      }
                    "
                  >
                    ×
                  </button>
                </header>
                <div id="modal-1___BV_modal_body_" class="modal-body">
                  <div class="flex-col">
                    <label>Loan Amount</label>
                    <b-form-input
                      id="input-default"
                      v-model="loanDetails.loanAmount"
                      :value="Number(perfiosAmount.AABAmount)"
                      type="number"
                      class="custom-select"
                      @change="handleAABAmount"
                      >{{ perfiosAmount.AABAmount }}</b-form-input
                    >
                    <p
                      ref="errorAmountDiv"
                      style="color: #940000"
                      class="d-none"
                    >
                      Maximum Eligible amout is {{ perfiosAmount.AABAmount }}
                    </p>
                    <!-- <input
                      v-model="loanDetails.loanAmount"
                      type="number"
                      class="custom-select"
                    /> -->
                  </div>
                  <div class="flex-col mt-3">
                    <!-- <label>Tenure</label> -->
                    <label for="range-1">Tenure</label>
                    <b-form-input
                      id="range-1"
                      v-model="loanDetails.loanTenure"
                      type="range"
                      min="12"
                      max="36"
                    ></b-form-input>
                    <div class="mt-2">
                      Month:
                      {{ loanDetails.loanTenure ? loanDetails.loanTenure : 12 }}
                    </div>
                    <!-- <input
                      v-model="loanDetails.loanTenure"
                      style="width: 100%"
                      type="range"
                      min="1"
                      max="24"
                    /> -->
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      class="_nfl_button d-flex justify-content-center"
                      @click="next(1)"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
              <span tabindex="0"></span>
            </div>
          </div>
          <div id="modal-1___BV_modal_backdrop_" class="modal-backdrop"></div>
        </div>
      </div>
    </div>

    <b-modal
      ref="perfiosmodal"
      hide-footer
      centered
      title="Bank Statement Upload"
      size="xl"
      @hide="onPerfiosClose"
    >
      <div class="mt-4">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://pisoauat.niyogin.in/gates/store/pfs/qzFmw_ztx.html"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>

    <!-- OTP Modal Starts -->
    <b-modal
      ref="otpmodal"
      no-close-on-backdrop
      modal-class="_nfl_thankyou_popup"
      hide-header
      hide-footer
      centered
    >
      <div class="h1 _verify-otp-wrapper ml-0 text-center">
        OTP Verification
      </div>
      <div class="verify_verify_description text-center">
        Enter OTP code sent to your mobile number<br />
        {{ mobileNumberBasicDetails }}
        <!-- {{ $store.state.customerObject.mobileNo }} -->
      </div>
      <div class="d-flex mt-2 ml-4 pl-3">
        <!-- <b-form-group id="otp-id" label-for="otp-id"> -->
        <validation-provider
          v-slot="validationContext"
          name="otp"
          rules="required|otp"
        >
          <b-form-input
            id="otp-id-form"
            ref="otpdigitone"
            v-model="otp_digit_one"
            class="form-control1"
            name="otp-id-form"
            type="number"
            :formatter="verifyMaxlength"
            :state="getValidationState(validationContext)"
            aria-describedby="otp-id-form"
          />
          <!-- invalid verification_otp_text -->
          <b-form-invalid-feedback id="otp-id-form">{{
            validationContext.error
          }}</b-form-invalid-feedback>
        </validation-provider>
        <!-- validaation for the input 2 -->
        <validation-provider
          v-slot="validationContext"
          name="otp"
          rules="required|otp"
        >
          <b-form-input
            id="otp-id-form1"
            ref="otpdigittwo"
            v-model="otp_digit_two"
            class="form-control1"
            type="text"
            :formatter="verifyMaxlength2"
            :state="getValidationState(validationContext)"
            aria-describedby="otp-id-form1"
            @keyup.native="handleDelete($event, 'otpdigitone')"
          />

          <!-- invalid verification_otp_text -->
          <b-form-invalid-feedback id="otp-id-form1">{{
            validationContext.error
          }}</b-form-invalid-feedback>
        </validation-provider>
        <!-- validaation for the input 3 -->

        <validation-provider
          v-slot="validationContext"
          name="otp"
          rules="required|otp"
        >
          <!-- {{ validationContext.errors[] }} -->
          <b-form-input
            id="otp-id-form2"
            ref="otpdigitthree"
            v-model="otp_digit_three"
            type="number"
            class="form-control1"
            :formatter="verifyMaxlength3"
            name="otp-id-form2"
            :state="getValidationState(validationContext)"
            aria-describedby="otp-id-form2"
            @keyup.native="handleDelete($event, 'otpdigittwo')"
          />
        </validation-provider>
        <!-- validaation for the input 4 -->

        <validation-provider
          v-slot="validationContext"
          name="otp"
          rules="required|otp"
        >
          <b-form-input
            id="otp-id-form3"
            ref="otpdigitfour"
            v-model="otp_digit_four"
            class="form-control1"
            :formatter="verifyMaxlength4"
            :state="getValidationState(validationContext)"
            name="otp-id-form3"
            aria-describedby="otp-id-form3"
            type="number"
            @keyup.enter="verifyOtp()"
            @keyup.native="handleDelete($event, 'otpdigitthree')"
          />
        </validation-provider>

        <!-- </b-form-group> -->
      </div>
      <div class="row verify-resend-text">
        <p class="mt-2 text-center">Did not receive?</p>
        <button class="resend-btn" @click="checkEligibility">Resend</button>
      </div>
      <div class="_login-wrapper-container-login-button ml-0 text-center mt-5">
        <button class="btn" @click="verifyOtp">Proceed</button>
      </div>
    </b-modal>
    <!-- OTP Modal Ends -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // innerformValue: {
    //   pan: String,
    //   aadhar: String
    // }
    //currentStep: Number
    mobileNumberBasicDetails: {
      type: String,
      required: true
    },
    createCustomerFunction: { type: Function, default: () => {} }
  },
  data() {
    return {
      // Resend: null,
      otp_digit_one: undefined,
      otp_digit_two: undefined,
      otp_digit_three: undefined,
      otp_digit_four: undefined,
      bankFieldValues: {
        bankOptions: [
          { value: "STUBL", text: "STUBL" },
          { value: "MTUBL", text: "MTUBL" },
          { value: "LTUBL", text: "LTUBL" },
          { value: "CHQBOOK", text: "CHQBOOK" }
        ],
        bankType: null
      },
      loanDetails: {
        loanAmount: null,
        loanTenure: 12,
        loanType: null
      },
      perfiosAmount: {
        AABAmount: 500000,
        FFEAmount: 0,
        rangeValue: 0
      },

      checkedFields: {
        termsAgreement: false
      },

      disabledFields: {
        panDisabled: 1,
        aadharDisabled: 1
      },
      filesArray: {
        aadharFile: {
          PADAF: [],
          PADAB: [],
          filePathPADAF: null,
          filePathPADAB: null
        },
        panFile: [],
        bankFile: null
      },
      perfiosEligibility: {
        url: null
      },
      genderOptions: ["Male", "Female"],
      hideshowFields: {
        bankDiv: 0,
        otpDiv: 0,
        panDiv: 0,
        aadharDiv: 0,
        otpModal: 0,
        checkEligibilityButton: 0,
        aadharOcr: 0,
        perfiosStatementDiv: 0
      },
      panFormFields: {
        pan: null,
        firstname: null,
        middlename: null,
        lastname: null,
        gender: null,
        emailId: null,
        dob: null
      },
      aadharFormFields: {
        number: null,
        mobileNumber: null,
        address: null,
        houseNumber: null,
        landmark: null,
        locality: null,
        street: null,
        line1: null,
        line2: null,
        city: null,
        state: null,
        pincode: null
      },
      isOTPConcentForCibil: false
    };
  },
  computed: {
    perfiosEligibilityUrl() {
      return this.perfiosEligibility.url;
    },
    getCustomerId() {
      return this.$store.getters.getCustomerId;
    },
    currentStep() {
      return this.$store.getters["applyloanubl/getCurrentStep"];
    }
  },
  watch: {
    otp_digit_one(newValue) {
      if (newValue || newValue.length == 1) {
        this.$refs.otpdigittwo.focus();
      }
    },
    otp_digit_two(newValue) {
      if (newValue || newValue.length == 1) {
        this.$refs.otpdigitthree.focus();
      }
    },
    otp_digit_three(newValue) {
      if (newValue || newValue.length == 1) {
        this.$refs.otpdigitfour.focus();
      }
    }
  },
  methods: {
    async verifyOtp() {
      //verify OTP
      const OTPNumber = `${this.otp_digit_one}${this.otp_digit_two}${this.otp_digit_three}${this.otp_digit_four}`;

      // TODO: Call API to verify OTP
      const response = await this.$axios.post("/verifyOtp", {
        mobileNo: this.mobileNumberBasicDetails,
        otp: OTPNumber
      });
      if (response && response.statusCode === 200) {
        this.isOTPConcentForCibil = true;
        this.$toast.success(response.message);
        this.$refs.otpmodal.hide();

        await this.updateCustomerBasicDetails();
        this.hideshowFields.bankDiv = 1;
        this.hideshowFields.checkEligibilityButton = 0;

        // TODO: CALL CBI API AND SAVE RESPONSE IN STORE
        // this.$emit("getCibilConsumer");
        await this.updateCustomer();

        this.$emit("getCibilConsumer");
      }
    },
    getValidationState(args) {
      if (args.pristine) {
        return null;
      }
      if (args.passed) {
        return true;
      }
      if (args.failed) {
        return false;
      }
      return null;
    },
    // verify OTP
    verifyMaxlength(e) {
      return String(e).substring(0, 1);
    },
    verifyMaxlength2(e) {
      return String(e).substring(0, 1);
    },
    verifyMaxlength3(e) {
      return String(e).substring(0, 1);
    },
    verifyMaxlength4(e) {
      return String(e).substring(0, 1);
    },
    handleDelete(e, args) {
      if (e.key === "Backspace" || e.key === "Delete") {
        this.$refs[args].focus();
        return e.preventDefault();
      }
    },
    updatePanDetails() {
      let updatedPanData = JSON.parse(JSON.stringify(this.panFormFields));

      this.$store.commit("customer/setCustomerUpdatedPanData", {
        updatedPanData: updatedPanData
      });
      this.disabledFields.panDisabled = 1;
    },
    updateAadharDetails() {
      let updatedAadharData = JSON.parse(JSON.stringify(this.aadharFormFields));

      this.$store.commit("customer/setCustomerUpdatedAadharData", {
        updatedAadharData: updatedAadharData
      });
      this.disabledFields.aadharDisabled = 1;
    },
    async createLoan() {
      const niyoCustomerCompanyId =
        this.$store.state.customer.customerObject.niyoCustomerCompanyId;
      await this.$axios
        .$post(
          "/createLoan?version=2.0",

          { niyoCustomerCompanyId: niyoCustomerCompanyId }
        )
        .then(async () => {
          // console.log(res);
        })
        .catch(() => {
          // console.log(err);
        });
    },
    async updateCustomer() {
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.getters["customer/getcustomerObject"])
      );
      // console.log(customerObject);
      if (customerObject == null) {
        return;
      }
      customerObject.companyDetails.purposeofLoan = "BREX";
      customerObject.companyDetails.coApplicantDetails = [
        {
          data: {
            pan: customerObject.companyDetails.pan,
            aadhaar: customerObject.companyDetails.aadhaar,
            permanentAddress: {
              addressLine1: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.address
                : customerObject.companyDetails.aadhaar.data.address,
              addressLine2: "XXX",
              landmark: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.landmark
                : customerObject.companyDetails.aadhaar.data.landmark,
              city: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.city
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .city[0],
              state: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              district: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              pincode: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.pincode
                : customerObject.companyDetails.aadhaar.data.pincode,
              stateCode: "MH",
              cityCode: "AUR"
            },
            correspondenceAddress: {
              addressLine1: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.address
                : customerObject.companyDetails.aadhaar.data.address,
              addressLine2: "XXX",
              landmark: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.landmark
                : customerObject.companyDetails.aadhaar.data.landmark,
              city: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.city
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .city[0],
              state: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              district: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              pincode: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.pincode
                : customerObject.companyDetails.aadhaar.data.pincode,
              stateCode: "MH",
              cityCode: "AUR"
            },
            officeAddress: {
              addressLine1: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.address
                : customerObject.companyDetails.aadhaar.data.address,
              addressLine2: "XXX",
              landmark: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.landmark
                : customerObject.companyDetails.aadhaar.data.landmark,
              city: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.city
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .city[0],
              state: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              district: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.state
                : customerObject.companyDetails.aadhaar.data.splitAddress
                    .state[0],
              pincode: customerObject.companyDetails.updatedAadhaar
                ? customerObject.companyDetails.updatedAadhaar.pincode
                : customerObject.companyDetails.aadhaar.data.pincode,
              stateCode: "MH",
              cityCode: "AUR"
            },
            name: customerObject.companyDetails.aadhaar.data.name,
            yearsOfExperience: "1",
            residenceType: "Owned",
            mobileNo: customerObject.mobileNo,
            email: customerObject.companyDetails.email,
            yearsOfResidency: "1",
            relationshipWithPromoter: "Brother",
            categoryOfApplicant: "Brother",
            numberOfShares: "0",
            partnershipRatio: "0"
          }
        }
      ];
      await this.$store.dispatch(
        "customer/manageCustomerCompanyPut",
        customerObject
      );

      try {
        let coApplicantCif = null;
        await this.createCoApplicant().then((a) => {
          coApplicantCif = a;
        });
        // .then((a) => {
        //   coApplicantCif = a;
        // });
        customerObject.companyDetails.coApplicantDetails[0].cif =
          coApplicantCif.cif;
        customerObject.companyDetails.documents = {};

        await this.$store.dispatch(
          "customer/manageCustomerCompanyPut",
          customerObject
        );

        await this.$store.commit("customer/setCustomerObject", {
          customerObject: customerObject
        });
      } catch (e) {
        // console.log();
      }
    },
    async createCoApplicant() {
      let coAppResponse = {};
      const customerObject = this.$store.state.customer.customerObject;

      const packet = {
        details: {
          data: {
            categoryOfApplicant: "Self",
            aadhaar: customerObject.companyDetails.updatedAadhaar
              ? customerObject.companyDetails.updatedAadhaar
              : customerObject.companyDetails.aadhaar.data,
            permanentAddress: customerObject.companyDetails.permanentAddress,
            correspondenceAddress:
              customerObject.companyDetails.correspondenceAddress,
            officeAddress: customerObject.companyDetails.officeAddress,
            pan: customerObject.companyDetails.updatedPan
              ? customerObject.companyDetails.updatedPan
              : customerObject.companyDetails.pan.data,
            // yearsOfExperience: "15",
            // residenceType: "Owned",
            name: customerObject.companyDetails.aadhaar.data.name,
            mobileNo: customerObject.mobileNo,
            email: customerObject.companyDetails.email
          }
        },
        typeId: customerObject.typeId,
        sectorType: customerObject.companyDetails.sectorType
      };

      await this.$axios
        .$post(
          "https://pisoauat.niyogin.in/gates/1.0/sweeps/createCoApplicant",
          packet,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic eFNncWg6R0tQZWpYRX1j"
            }
          }
        )
        .then((response) => {
          coAppResponse = response;
        })
        .catch((err) => {
          return err;
        });

      return coAppResponse;
    },
    async updateCustomerBasicDetails() {
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );

      const panObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.panData)
      );

      const aadharObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.aadharData)
      );

      customerObject.companyDetails.pan = panObject;
      customerObject.companyDetails.aadhaar = aadharObject;
      this.$store.commit("customer/setCustomerObject", {
        customerObject: customerObject
      });

      await this.$store.dispatch(
        "customer/manageCustomerCompanyPut",
        JSON.parse(JSON.stringify(this.$store.state.customer.customerObject))
      );

      const newcustomerObject = await JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );
      const addressPacket = {
        addressLine1: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.address
          : newcustomerObject.companyDetails.aadhaar.data.address,
        addressLine2: "XXX",
        landmark: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.landmark
          : newcustomerObject.companyDetails.aadhaar.data.landmark
          ? newcustomerObject.companyDetails.aadhaar.data.landmark
          : "BLANK",
        city: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.city
          : newcustomerObject.companyDetails.aadhaar.data.splitAddress.city[0]
          ? newcustomerObject.companyDetails.aadhaar.data.splitAddress.city[0]
          : "BLANK",
        state: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.state
          : newcustomerObject.companyDetails.aadhaar.data.splitAddress.state[0]
          ? newcustomerObject.companyDetails.aadhaar.data.splitAddress.state[0]
          : "BLANK",
        district: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.state
          : newcustomerObject.companyDetails.aadhaar.data.splitAddress.state[0],
        pincode: newcustomerObject.companyDetails.updatedAadhaar
          ? newcustomerObject.companyDetails.updatedAadhaar.pincode
          : newcustomerObject.companyDetails.aadhaar.data.pincode,
        stateCode: "MH",
        cityCode: "AUR"
      };
      let addressTypes = [
        "officeAddress",
        "correspondenceAddress",
        "permanentAddress"
      ];
      for (let i = 0; i < addressTypes.length; i++) {
        newcustomerObject.companyDetails[addressTypes[i]] = addressPacket;
        // {
        //   addressLine1:
        //    "TestData",
        //   addressLine2: "XXX",
        //   landmark: "NA",
        //   city: "AURANGABAD",
        //   state: "Maharashtra",
        //   district: "AUR",
        //   pincode: "431136",
        //   stateCode: "MH",
        //   cityCode: "AUR"
        // };
      }

      await this.$store.commit("customer/setCustomerObject", {
        customerObject: newcustomerObject
      });
      //
      // await this.updateCustomer();
    },
    async uploadDoc(e) {
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );
      const formData = new FormData();
      formData.append("document", e.target.files[0]);
      formData.append("cif", customerObject.cif);
      formData.append("category", e.target.id);
      formData.append("docOwnerType", "C");
      formData.append(
        "niyoPartnerCompanyId",
        customerObject.niyoPartnerCompanyId
      );
      formData.append(
        "niyoCustomerCompanyId",
        customerObject.niyoCustomerCompanyId
      );
      await this.$axios
        .post(
          "https://pisoauat.niyogin.in/gates/1.0/sweeps/uploadDoc",
          formData,
          {
            auth: {
              username: "xSgqh",
              password: "GKPejXE}c"
            }
          }
        )
        .then((res) => {
          customerObject.companyDetails["documents"] = {
            [e.target.id]: res.data
          };
          this.filesArray.bankFile = e.target.files[0];

          this.$store.commit("customer/setCustomerObject", {
            customerObject: customerObject
          });
        })
        .catch(() => {
          // console.log(err);
        });
    },
    async checkEligibility() {
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );
      this.$refs.aadharEdit.style.display = "none";

      const updatedPanData = this.$store.state.customer.updatedPanData;
      const updatedAadharData = this.$store.state.customer.updatedAadharData;
      if (updatedPanData) {
        customerObject.companyDetails.updatedPan = updatedPanData;
      }
      if (updatedAadharData) {
        customerObject.companyDetails.updatedAadhaar = updatedAadharData;
      }

      await this.$store.commit("customer/setCustomerObject", {
        customerObject: customerObject
      });

      if (
        this.checkedFields.termsAgreement === "accepted" &&
        this.hideshowFields.panDiv === 1 &&
        this.hideshowFields.aadharDiv === 1
      ) {
        await this.$axios.$post("/generateOtp", {
          mobile: this.mobileNumberBasicDetails,
          messages:
            "Hi the OTP for verifying your mobile number with niyogin is {otp}"
        });
        this.$refs.otpmodal.show();
      } else {
        this.$toast.error("Agree the terms and conditions first");
      }
    },
    bankstatementUpload(event) {
      this.filesArray.bankFile = event.target.files[0];
    },
    setCustomerId() {
      this.$store.commit("setCustomerId", { value: "CAEPT8399P" });
    },
    handleAABAmount() {
      const value = this.perfiosAmount.AABAmount;
      const changedValue = this.loanDetails.loanAmount;

      this.$refs["errorAmountDiv"].classList.remove("block");
      this.$refs["errorAmountDiv"].classList.add("d-none");

      if (changedValue > value) {
        this.loanDetails.loanAmount = value;
        this.$refs["errorAmountDiv"].classList.remove("d-none");
        this.$refs["errorAmountDiv"].classList.add("block");
      }
    },
    async panUpload(event) {
      this.filesArray.panFile = event.target.files[0];
      this.setCustomerId();
      //   console.log(panDiv);
      const formData = new FormData();
      formData.append("document", this.filesArray.panFile);
      formData.append("cif", "0");
      formData.append("category", "PPAN");
      formData.append("docOwnerType", "C");
      formData.append("niyoPartnerCompanyId", "0");
      formData.append("niyoCustomerCompanyId", "0");
      let PPANSource = {};
      let dataNode = {};

      const response = await this.$axios.post(
        "https://pisoauat.niyogin.in/gates/1.0/sweeps/uploadDoc",
        formData
      );
      // console.log(response);
      if (response != null && response.data) {
        PPANSource = response.data;
        const PPAN = {
          image: response.data.docUrl
        };
        await this.$axios
          .$post(
            "https://pisoauat.niyogin.in/gates/1.0/sweeps/extractPPAN",
            PPAN
          )
          .then((response) => {
            if (response != null) {
              // console.log(response);
              try {
                // dataNode = response;
                this.hideshowFields.panDiv = 1;

                dataNode.data = response;
                dataNode.PPAN = PPANSource;

                // response.PPAN = PPANSource;

                this.panFormFields.firstname = response.name;
                this.panFormFields.pan = response.pan;
                this.panFormFields.middlename = response.fatherName;

                const dateArray = response.dob.split("/");
                const month = dateArray[1];
                const year = dateArray[2];
                const day = dateArray[0];
                const outputDate = `${year}-${month}-${day}`;
                this.panFormFields.dob = outputDate;
                dataNode, "DataNde";

                this.$store.dispatch("customer/setCustomerPanData", {
                  panData: dataNode
                });
              } catch (e) {
                // console.trace();
              }
              // createCustomer();
            }
          });
      }
    },
    async createNewCustomer() {
      await this.$emit("createCustomerFunction");
      // this.$refs.panEdit.style.display = "none";
    },
    async aadharUpload(event, side) {
      if (side === "front") {
        this.filesArray.aadharFile.PADAF = event.target.files[0];
      } else {
        this.filesArray.aadharFile.PADAB = event.target.files[0];
      }
      // console.log("asdasd", this.filesArray.aadharFile.PADAF);

      // this.filesArray.aadharFile = event.target.files[0];
      if (
        this.filesArray.aadharFile.PADAF.length === 0 ||
        this.filesArray.aadharFile.PADAB.length === 0
      ) {
        return;
      }
      let PADAF = {};
      let PADAB = {};
      let aadharObj = {};
      for (let i = 0; i < 2; i++) {
        const formData = new FormData();
        formData.append(
          "document",
          this.filesArray.aadharFile[Object.keys(this.filesArray.aadharFile)[i]]
        );
        formData.append("cif", "0");
        formData.append("category", Object.keys(this.filesArray.aadharFile)[i]);
        formData.append("docOwnerType", "C");
        formData.append("niyoPartnerCompanyId", "0");
        formData.append("niyoCustomerCompanyId", "0");
        const response = await this.$axios.post(
          "https://pisoauat.niyogin.in/gates/1.0/sweeps/uploadDoc",
          formData,
          {
            auth: {
              username: "xSgqh",
              password: "GKPejXE}c"
            }
          }
        );

        if (response != null && response.data) {
          if (Object.keys(this.filesArray.aadharFile)[i] === "PADAF") {
            this.filesArray.aadharFile.filePathPADAF = response.data.docUrl;
            PADAF = response.data;
          }
          if (Object.keys(this.filesArray.aadharFile)[i] === "PADAB") {
            this.filesArray.aadharFile.filePathPADAB = response.data.docUrl;
            PADAB = response.data;
          }
          // if (this.filePathPADAB != null && this.filePathPADAB != null) {
          //   break;
          // }
        }
      }
      if (
        this.filesArray.aadharFile.filePathPADAF != null &&
        this.filesArray.aadharFile.filePathPADAB != null
      ) {
        const data = {
          front: this.filesArray.aadharFile.filePathPADAF,
          back: this.filesArray.aadharFile.filePathPADAB
        };
        await this.$axios
          .$post("https://pisoauat.niyogin.in/gates/1.0/sweeps/extractAN", data)
          .then((response) => {
            aadharObj.PADAF = PADAF;
            aadharObj.PADAB = PADAB;
            aadharObj.data = response;
            aadharObj.mode = "ocr";
            this.hideshowFields.aadharDiv = 1;

            this.aadharFormFields.number = response.uid;
            this.aadharFormFields.mobileNumber = "";
            this.aadharFormFields.middlename = response.fatherName;
            this.aadharFormFields.address = response.splitAddress.addressLine;
            this.aadharFormFields.pincode = response.splitAddress.pincode[0];
            this.aadharFormFields.city = response.splitAddress.city[0]
              ? response.splitAddress.city[0]
              : "BLANK";
            this.aadharFormFields.state = response.splitAddress.state[0]
              ? response.splitAddress.state[0]
              : "BLANK";
            this.aadharFormFields.houseNumber = response.splitAddress
              .houseNumber[0]
              ? response.splitAddress.houseNumber[0]
              : "XXX";
            this.aadharFormFields.line2 = response.splitAddress.line2[0]
              ? response.splitAddress.line2[0]
              : "XXX";
            this.aadharFormFields.locality = response.splitAddress.locality[0]
              ? response.splitAddress.locality[0]
              : "XXX";
            this.aadharFormFields.line1 = response.splitAddress.line1[0]
              ? response.splitAddress.line1[0]
              : "XXX";
            this.aadharFormFields.landmark = response.splitAddress.landmark[0]
              ? response.splitAddress.landmark[0]
              : "XXX";
            this.$store.dispatch("customer/setCustomerAadharData", {
              aadharData: aadharObj
            });
          });
      }
    },
    async handlePinCodeChange() {
      var pinCodeAPIRes = null;
      if (this.aadharFormFields.pincode.length == 6) {
        pinCodeAPIRes = await this.$axios.$get(
          `/validatePincode/${this.aadharFormFields.pincode}`
        );
      }

      if (pinCodeAPIRes) {
        if (pinCodeAPIRes.pincodeData && pinCodeAPIRes.pincodeData.length) {
          this.aadharFormFields.city = pinCodeAPIRes.pincodeData[0].pccityname;
          this.aadharFormFields.state =
            pinCodeAPIRes.pincodeData[0].cpprovincename;
        }
      }
    },
    async onPerfiosClose() {
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );
      // let packet = {
      //   niyoCustomerCompanyId: customerObject.niyoCustomerCompanyId,
      //   companyName: customerObject.companyName
      // };
      let packet = {
        niyoCustomerCompanyId: 3439305,
        companyName: "jaskdjaskdjaskjd"
      };
      await this.$axios
        .$post("/calculateLoanAmountOnPerfios", packet)
        .then(async (res) => {
          try {
            if (res && res.eligibleAmount === undefined) {
              //Allowed but Waiting for Eligible amount
              this.filesArray.bankFile = "notNull";
              this.hideshowFields.perfiosStatementDiv = 1;

              const answer = await this.retryApiCall(customerObject);
              res = answer;
            }
            if (res === null) {
              //Not Eligibile
            }
            if (res.txnId) {
              this.$refs.bnkStmt.style.display = "flex";
              this.hideshowFields.perfiosStatementDiv = 0;
              this.filesArray.bankFile = null;
            }

            if (res && res.eligibleAmount) {
              this.perfiosAmount.AABAmount =
                Math.round(res.eligibleAmount * 100) / 100;
              this.filesArray.bankFile = "notNull";
              this.hideshowFields.perfiosStatementDiv = 0;

              const customerObject = JSON.parse(
                JSON.stringify(this.$store.state.customer.customerObject)
              );
              customerObject.companyDetails.eligibleAmount =
                this.perfiosAmount.AABAmount;
              this.$store.commit("customer/setCustomerObject", {
                customerObject: customerObject
              });
            } else {
              this.$refs.bnkStmt.style.display = "flex";
            }
          } catch (e) {
            // console.log(e);
          }
        });
    },
    async retryApiCall(customerObject) {
      let retries = 0;
      const maxRetries = 5;

      while (retries < maxRetries) {
        try {
          let packet = {
            niyoCustomerCompanyId: customerObject.niyoCustomerCompanyId,
            companyName: customerObject.companyName
          };
          //     let packet = {
          //   niyoCustomerCompanyId: 3439305,
          //   companyName: "jaskdjaskdjaskjd"
          // };
          const response = await this.$axios.$post(
            "/calculateLoanAmountOnPerfios",
            packet
          );
          retries += 1;
          if (response.eligibleAmount || retries === maxRetries - 1) {
            return response;
          }
          await new Promise((resolve) => setTimeout(resolve, 3000));
        } catch (error) {
          retries += 1;
          // await new Promise((reject) => setTimeout(reject, 15000));
          return error;
        }
      }
      throw new Error(`Max retries (${maxRetries}) exceeded`);
    },
    async perfiosStartProcess() {
      const data = await this.perfiosUploadStartInsight();
      this.perfiosEligibility = data;
      this.hideshowFields.perfiosStatementDiv = 1;
    },
    async perfiosUploadStartInsight() {
      this.$refs.perfiosmodal.show();
      this.hideshowFields.checkEligibilityButton = 0;
      this.$refs.bnkStmt.style.display = "none";
      // debugger;

      // this.hideshowFields.bankDiv = 0;
      // this.$refs.eligibilityButton.style.display = "none";
      const customerObject = JSON.parse(
        JSON.stringify(this.$store.state.customer.customerObject)
      );

      const packet = {
        niyoCustomerCompanyId: customerObject.niyoCustomerCompanyId,
        customerEmailId: customerObject.companyDetails.email,
        type: "statement"
      };

      const response = await fetch(
        "https://pisoauat.niyogin.in/gates/1.0/sweeps/startInsight",
        {
          method: "POST",
          headers: {
            Authorization: "Basic eFNncWg6R0tQZWpYRX1j",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(packet)
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch(() => {});
      return response;

      // console.log('inside',response)

      // const response = {
      //   txnId: "T-TwVUnFx",
      //   html: "<html><body onload='document.autoform.submit();'><form name='autoform' method='post' action='https://daa2.perfios.com/KuberaVault/insights/start'><input type='hidden' name='payload' value='<payload><apiVersion>2.1</apiVersion><vendorId>niyoginFintech</vendorId><txnId>T-TwVUnFx</txnId><emailId>55d799526656d267bc6a5fc68fa411c5b7b1f7be791107801940c093e3207132d22b56760608fedfee091c08b5bd6fac23a25d0976b0e07f802f2fcb58fa5fd856134feb826a9597b777c5a84c9c2129ff865d0f9036cb1afa789df3abd2405c1b587a9e33554c42ba85270645181ca6dd7755bd863502318044ad83b60b4ab5a30d37511a93554350c17fc2371279783684e527f972f36dacaa350459ace6b01cecd77bc09b39b2bfbf2ccde0b1302dae110e27f95c42f3323fdf9f8e2bd2670d7815e146d1a8ff04502c79269997964bb19ec1737ab25191bb7b237c2fcd4c002e7fead6b3f49de26e77f1f924d178f0228f052900480b0966c6b5557875affd31401ddae17065f3fa3e51105c43ef9ff9f6ef0dbda0fbe6528a0fd03f508fb362d7c43a7318f6944fd5c55abf6bd81b38189f93d92bf4f7ffbf7a4d6755db5ea9aa637490efcad3141ce1c0907b0cf53e70f627d465874875a7530432859f290d1945fec009fdd110eab89770172e0cd924a7765b653d54bcafa672ed1982d189b5e3d97b6d14756476139882319e94bdb166947fa00420ac1091c4d5cd2989629c767640dd46234b8e24f3ce1ee746df21816c28e842b0ac9770015d986d3214205e1cfa7e207ecce15bb97fe54cc7fb6c7fddfe578017c53fa1c08b2df5cf628011682c5b94d387d7eef92300c771cdf1f641e2fd7069343a580c0a55f4</emailId><destination>statement</destination><returnUrl>https://pisoauat.niyogin.in/gates/store/dummyperfiosreturn.html</returnUrl><transactionCompleteCallbackUrl>https://pisoauat.niyogin.in/gates/1.0/sways/insightTxnComplete</transactionCompleteCallbackUrl><acceptancePolicy>atLeastOneTransactionInRange</acceptancePolicy><yearMonthFrom>2022-06</yearMonthFrom><yearMonthTo>2022-12</yearMonthTo></payload>'><input type='hidden' name='signature' value='694cdfb2f2ee5e024a21cb093957a4b647932bd152eeb50ff956574cc8c486eeb14bcb553b1c5f8d277d97e7fdf0ef12577fc8a6a4fe78dd07413f22bdc9f267630e0afd27af0817fd2a76aeef2442174ca8db040cc1a7b1854a0c629c25ec1c6c88d5205a9bf652966ac1aa7dbc8f4626c0c86ffc031443ad83410a77f2dad81bafa577e9497fc312ec5532d826b3a1a6afaeb927523305310739f3732c83d95e31d9f71ac9115b793fd1a46c7703cc04f8f50bdc7d7aafa0a58b3022c1660947a5ce173aaf9781e5d72d02170dabf23bb8766b4d2fcd41d06fdc9b2f74832952cdb018beb17ff4ccf6f0163a0dee9501280dfe7c9d53709cf71d1e21bdb08881f239cd0843a9e1d207747bfc70dbfc875ac461eacf6cdb863879148eee02bd7ba78934a29c1b363da4db9ebd119ed91ccf6930e270b21f95f6b3cfc4e3d7c2d4983faac8390dfe5f54a5036cc6683291a85d4fad974fecc9aa6b6f3a35df21a9c30b502d2ee1b38febba392c5c2504c6d60f39a8ccedd3340a800c39cc8a09aba628cc233b21dc3563efb06c8cb058e0dbb83eac40ee308b3e2a81fc1ee1e38f2e08674ff31afc50e84acd73d9dacc3a86c49a9920946b018809df008c5495183ba3b761e3536aa8aa0cf3f97dd36c7446a05fbe7c1596fce6324e7cb312acfed0b4985f4e331feb495f90563c0ba9909f4fe37c2df36f97fc736e56b8a2d5'></form></body></html>",
      //   url: "https://pisoauat.niyogin.in/gates/store/pfs/T-TwVUnFx.html"
      // };
      // debugger;

      // this.perfiosEligibility.url = response.url;
    },
    async next(args) {
      if (
        parseInt(this.perfiosAmount.AABAmount) >
        parseInt(this.loanDetails.loanAmount)
      ) {
        return;
      }
      const customerObject = await this.$store.getters[
        "customer/getcustomerObject"
      ];
      const newCustomerObject = JSON.parse(JSON.stringify(customerObject));

      if (newCustomerObject != null) {
        switch (args) {
          case 0:
            newCustomerObject.companyDetails.loanAmount =
              this.perfiosAmount.AABAmount;
            break;

          case 1:
            newCustomerObject.companyDetails.loanAmount =
              this.loanDetails.loanAmount;
            break;
        }

        newCustomerObject.companyDetails.tenureOfLoan =
          this.loanDetails.loanTenure;

        try {
          newCustomerObject.companyDetails.stages[
            newCustomerObject.companyDetails.stages.length - 1
          ].status = "done";
          newCustomerObject.companyDetails.stages.push({
            name: "Personal Details",
            status: "done"
          });
          newCustomerObject.companyDetails.stages.push({
            name: "Business Details",
            status: "pending"
          });
          newCustomerObject.companyDetails.currentStage = "Application Details";
        } catch (e) {
          // console.log(e);
        }
        // newCustomerObject.loanType = this.loanDetails.loanType;
        await this.$store.dispatch("customer/setCustomerObject", {
          customerObject: newCustomerObject
        });
        await this.$store.dispatch(
          "customer/manageCustomerCompanyPut",
          newCustomerObject
        );
        await this.createLoan();

        this.$store.dispatch("applyloanubl/setCurrentStep", {
          // this.$router.push.(currentStep + 1);
          currentStep: this.currentStep + 1
        });
      }
    }
  }
};
</script>

<style>
.save-btn {
}
.aadhar-div-start {
  margin-top: 2rem;
}

.otp-div {
  background-color: aqua;
  margin-top: 2rem;
  /* height: 5rem; */
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.mxy-auto {
  margin: auto;
}
.flex-center {
  align-items: center;
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.space-between {
  justify-content: space-between;
}
.end {
  display: flex;
  justify-content: right;
  margin-top: 1rem;
}
.center {
  align-items: center;
}
.mt-2 {
  margin-top: 2rem;
}
.mt-4 {
  margin-top: 4rem;
}

.n-custom-file {
  /* position: relative; */
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}
.custom-upload-label {
  background-color: rgb(177 187 195);
  white-space: nowrap;
  overflow-x: hidden;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  overflow: hidden;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.font-xxsmall {
  font-size: xx-small;
}

.flex-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 75px;
}

.passcode-area {
  margin-top: 50px;
  text-align: center;
}
.passcode-area > input {
  background-color: #fff;
  border: 2px solid #d6d6d6;
  border-radius: 4px;
  padding: 0;
  margin: 25px 6px 0;
  width: 65px;
  height: 65px;
  text-align: center;
  font-size: 32px;
  line-height: 1.29;
  text-transform: uppercase;
  background-clip: padding-box;
}
.passcode-area > input:nth-child(3) {
  margin-right: 25px;
}
.passcode-area > input:focus {
  -webkit-appearance: none;
  border: 2px solid skyblue;
  outline: 0;
  box-shadow: 0px 0px 3px rgba(131, 192, 253, 0.5);
}
/* verification OTP page style */
.form-control1 {
  display: block;
  width: 50%;
  padding: 0.375rem 0.75rem;
}
.form-control.is-valid {
  background-image: none;
  /* border: 3px solid #28a745; */
  background-color: rgba(227, 239, 250, 0.78039);
  padding-right: calc(1.5em - 3.25rem) !important;
}
.form-control.is-invalid {
  /* border: 3px solid #dc3545; */
  background-image: none;
  background-color: rgba(227, 239, 250, 0.78039);
  padding-right: calc(1.5em - 2.25rem) !important;
}
.resend-btn {
  color: blue;
  margin-top: -5px;
  border: none;
  outline: none;
  background: transparent;
}
.verify-resend-text {
  margin-left: 75px;
}
</style>
