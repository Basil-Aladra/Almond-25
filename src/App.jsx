
import coverIamge from "./assets/CoverIamge.jpg";
import proflie from "./assets/profile.jpeg";
function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 h-full">
        <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={coverIamge}
              alt="Almond Cakes & Coffee"
              className="w-full h-60 object-cover"
            />

            {/* Logo Box Positioned Over Image */}
            <div className="absolute -bottom-10 right-4 z-20">
              <div className="w-28 h-28 rounded-xl shadow-lg bg-white p-1">
                <img
                  src={proflie}
                  alt="Almond Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-12 pb-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <h2 className="font-bold text-lg ml-2">Almond</h2>
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-green-600 text-sm italic">CAKES & COFFEE</p>

            <div className="mt-10 flex justify-center gap-2 ml-10 mr-10">
              <a
                href="tel:+972593716716"
                className="btn  text-white w-44 rounded-xl flex justify-center"
                style={{ backgroundColor: "#009F79" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.89924 15.0272L8.35545 15.5437V15.5437L8.89924 15.0272ZM8.4438 14.5477L8.98759 14.0312V14.0312L8.4438 14.5477ZM6.02714 14.2123L6.40128 14.8623H6.40128L6.02714 14.2123ZM4.11663 15.312L4.49077 15.962L4.11663 15.312ZM3.57829 18.7584L3.03449 19.275L3.03449 19.2749L3.57829 18.7584ZM4.99883 20.254L5.54263 19.7375L4.99883 20.254ZM6.32368 20.9631L6.25001 21.7095L6.32368 20.9631ZM16.1846 16.4752L15.6408 15.9587L16.1846 16.4752ZM20.2481 6.92574C20.2703 6.51212 20.6237 6.19481 21.0373 6.21701C21.4509 6.23921 21.7682 6.59252 21.746 7.00613L20.2481 6.92574ZM14.8093 8.80507L14.2655 9.32159L14.8093 8.80507ZM14.5224 8.50311L13.9786 9.01963L14.5224 8.50311ZM14.3657 5.6931L13.7533 5.26012L14.3657 5.6931ZM15.6267 3.90961L16.2391 4.3426V4.3426L15.6267 3.90961ZM19.2823 3.09213C19.5676 3.39246 19.5554 3.86717 19.255 4.15244C18.9547 4.4377 18.48 4.42549 18.1947 4.12516L19.2823 3.09213ZM12.9368 13.0559L12.393 12.5394L12.9368 13.0559ZM13.3359 19.8123C12.9852 20.0327 12.5222 19.9271 12.3018 19.5764C12.0814 19.2257 12.1871 18.7627 12.5378 18.5423L13.3359 19.8123ZM8.88702 20.0584C9.29245 19.9735 9.68992 20.2334 9.77481 20.6388C9.8597 21.0442 9.59986 21.4417 9.19444 21.5266L8.88702 20.0584ZM8.89924 15.0272L8.35545 15.5437L7.9 15.0642L8.4438 14.5477L8.98759 14.0312L9.44304 14.5107L8.89924 15.0272ZM6.02714 14.2123L6.40128 14.8623L4.49077 15.962L4.11663 15.312L3.74249 14.662L5.653 13.5623L6.02714 14.2123ZM3.57829 18.7584L4.12208 18.2419L5.54263 19.7375L4.99883 20.254L4.45504 20.7705L3.03449 19.275L3.57829 18.7584ZM16.1846 16.4752L15.6408 15.9587C19.5169 11.8778 20.1671 8.43556 20.2481 6.92574L20.9971 6.96594L21.746 7.00613C21.6467 8.85536 20.8616 12.6403 16.7284 16.9917L16.1846 16.4752ZM14.8093 8.80507L14.2655 9.32159L13.9786 9.01963L14.5224 8.50311L15.0662 7.9866L15.353 8.28856L14.8093 8.80507ZM14.3657 5.6931L13.7533 5.26012L15.0143 3.47663L15.6267 3.90961L16.2391 4.3426L14.9781 6.12608L14.3657 5.6931ZM14.8093 8.80507C15.353 8.28856 15.3537 8.28929 15.3544 8.29002C15.3547 8.29028 15.3554 8.29102 15.3558 8.29152C15.3568 8.29254 15.3578 8.29357 15.3588 8.29463C15.3607 8.29675 15.3628 8.29896 15.3649 8.30127C15.3691 8.30588 15.3735 8.31087 15.3782 8.31625C15.3875 8.32701 15.3978 8.33931 15.4088 8.3532C15.4308 8.38098 15.4556 8.41511 15.4817 8.45588C15.5341 8.53764 15.5908 8.64531 15.6388 8.78033C15.7365 9.0549 15.7898 9.4185 15.7232 9.87257C15.5925 10.7647 15.008 11.9644 13.4806 13.5724L12.9368 13.0559L12.393 12.5394C13.8207 11.0363 14.1724 10.1106 14.2391 9.65511C14.2713 9.43536 14.2386 9.31957 14.2256 9.28321C14.2184 9.26277 14.2136 9.25709 14.2183 9.26437C14.2205 9.26789 14.225 9.27451 14.2326 9.28407C14.2364 9.28885 14.2409 9.29437 14.2464 9.30063C14.2491 9.30375 14.252 9.30706 14.2552 9.31056C14.2568 9.31231 14.2584 9.3141 14.2601 9.31594C14.261 9.31686 14.2619 9.31779 14.2628 9.31873C14.2632 9.3192 14.2639 9.31992 14.2641 9.32015C14.2648 9.32087 14.2655 9.32159 14.8093 8.80507ZM12.9368 13.0559L13.4806 13.5724C11.9578 15.1757 10.8076 15.806 9.93014 15.9485C9.47986 16.0216 9.11539 15.9632 8.83938 15.8544C8.70446 15.8012 8.59775 15.7387 8.51764 15.6819C8.47767 15.6535 8.44441 15.6266 8.41754 15.6031C8.4041 15.5913 8.39223 15.5803 8.38191 15.5703C8.37675 15.5654 8.37196 15.5606 8.36756 15.5562C8.36535 15.554 8.36324 15.5518 8.36122 15.5497C8.36022 15.5487 8.35923 15.5477 8.35827 15.5467C8.35779 15.5462 8.35708 15.5454 8.35684 15.5452C8.35614 15.5444 8.35545 15.5437 8.89924 15.0272C9.44304 14.5107 9.44235 14.51 9.44167 14.5093C9.44145 14.509 9.44076 14.5083 9.44032 14.5078C9.43942 14.5069 9.43853 14.506 9.43766 14.5051C9.4359 14.5033 9.43419 14.5015 9.43252 14.4998C9.42917 14.4965 9.42599 14.4933 9.42296 14.4904C9.41692 14.4846 9.41149 14.4796 9.4067 14.4754C9.39714 14.467 9.39001 14.4616 9.38542 14.4584C9.37606 14.4517 9.37702 14.454 9.38975 14.459C9.40908 14.4666 9.49994 14.4987 9.68968 14.4679C10.0922 14.4025 10.9609 14.0472 12.393 12.5394L12.9368 13.0559ZM15.6267 3.90961L15.0143 3.47663C16.0279 2.04305 18.0561 1.80119 19.2823 3.09213L18.7385 3.60864L18.1947 4.12516C17.6719 3.57471 16.7514 3.61795 16.2391 4.3426L15.6267 3.90961ZM4.99883 20.254L5.54263 19.7375C5.82167 20.0313 6.1136 20.1887 6.39735 20.2167L6.32368 20.9631L6.25001 21.7095C5.50296 21.6357 4.8984 21.2373 4.45504 20.7705L4.99883 20.254ZM14.5224 8.50311L13.9786 9.01963C13.0111 8.00095 12.9426 6.40678 13.7533 5.26012L14.3657 5.6931L14.9781 6.12608C14.556 6.72315 14.6207 7.51753 15.0662 7.9866L14.5224 8.50311ZM4.11663 15.312L4.49077 15.962C3.66992 16.4345 3.50929 17.5968 4.12208 18.2419L3.57829 18.7584L3.03449 19.2749C1.72951 17.901 2.10957 15.6019 3.74249 14.662L4.11663 15.312ZM8.4438 14.5477L7.9 15.0642C7.51456 14.6584 6.91397 14.5672 6.40128 14.8623L6.02714 14.2123L5.653 13.5623C6.75146 12.93 8.11382 13.1113 8.98759 14.0312L8.4438 14.5477ZM12.9368 19.1773L12.5378 18.5423C13.5215 17.9241 14.5685 17.0876 15.6408 15.9587L16.1846 16.4752L16.7284 16.9917C15.5744 18.2067 14.431 19.1241 13.3359 19.8123L12.9368 19.1773ZM6.32368 20.9631L6.39735 20.2167C6.94389 20.2707 7.80877 20.2842 8.88702 20.0584L9.04073 20.7925L9.19444 21.5266C7.94592 21.788 6.92579 21.7762 6.25001 21.7095L6.32368 20.9631Z"
                    fill="white"
                  />
                </svg>
                اتصل بنا
              </a>
              <a
                href="https://maps.app.goo.gl/j7vRy7Fsy2C4NE4w7"
                className="btn  w-44 rounded-xl flex justify-center"
                style={{ color: "#009F79" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.1623C21 12.1187 21 9.5969 20.7169 9.20407C20.4337 8.81124 19.9387 8.64624 18.9487 8.31623L18 8M21 16.829C21 18.1199 21 18.7653 20.6603 19.18C20.5449 19.3208 20.4048 19.4394 20.247 19.5301C19.7821 19.797 19.1455 19.6909 17.8721 19.4787C16.6157 19.2693 15.9875 19.1646 15.3648 19.2167C15.1463 19.235 14.9292 19.2676 14.715 19.3144C14.1046 19.4477 13.5299 19.735 12.3806 20.3097C10.8809 21.0596 10.131 21.4345 9.33284 21.5501C9.09242 21.5849 8.8498 21.6021 8.60688 21.6016C7.80035 21.6001 7.01186 21.3373 5.43488 20.8116L5.05132 20.6838C4.06129 20.3538 3.56627 20.1888 3.28314 19.7959C3 19.4031 3 18.8813 3 17.8377V17M3 12.908C3 11.2491 3 10.4197 3.48841 9.97358C3.57388 9.89552 3.66809 9.82762 3.76917 9.77122C4.28426 9.48384 4.96572 9.66128 6.22311 10.075"
                    stroke="#009F79"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.25 11.2513C17.7356 10.0935 18 8.86093 18 7.70031C18 4.55211 15.3137 2 12 2C8.68629 2 6 4.55211 6 7.70031C6 10.8238 7.91499 14.4687 10.9028 15.7721C11.5993 16.076 12.4007 16.076 13.0972 15.7721C14.0514 15.3558 14.8963 14.7007 15.6042 13.9"
                    stroke="#009F79"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="12"
                    cy="8"
                    r="2"
                    stroke="#009F79"
                    stroke-width="1.5"
                  />
                </svg>
                الموقع
              </a>
            </div>

            <div className="mt-20 space-y-2">
              <a
                href="https://www.facebook.com/almondcakes20/"
                className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                style={{ borderColor: "#009F79" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <span className="text-[#009F79]">facebook</span>
              </a>
              <a
                href="https://www.instagram.com/almondcakes20/"
                className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                style={{ borderColor: "#009F79" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
                <span className="text-[#009F79]">instagram</span>
              </a>
              <a
                href="http://wa.me/+972593716716"
                className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                style={{ borderColor: "#009F79" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                <span className="text-[#009F79]">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
