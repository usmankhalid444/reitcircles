<template>
  <div class="font-metropolis-light">
    <header>
      <div class="px-3 xl:px-0 lg:text-center py-2 sm:py-3 bg-darkblue">
        <!-- logo start -->
        <div class="my-auto">
          <img
            class="mx-auto inline mr-3 2xl:mr-20"
            src="./assets/reitcircles-logo.png"
            alt="site-logo"
          />
          <!-- logo end -->
          <!-- toggle button for mobile start -->
          <span
            class="text-white float-right inline lg:hidden mt-2"
            @click="showMobileMenu = !showMobileMenu"
          >
            <svg
              v-if="!showMobileMenu"
              class="text-white fill-current"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
              />
            </svg>
            <svg
              v-else
              class="text-white fill-current"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
              />
            </svg>
          </span>
          <!-- toggle button for mobile end -->
          <!-- menu start -->
          <ul
            class="space-x-0 xl:space-x-5 2xl:space-x-10 space-y-5 sm:space-x-0 text-white pt-2 lg:pt-0 mt-3 sm:mt-0"
            :class="showMobileMenu ? 'text-left' : 'hidden lg:inline'"
          >
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Intro</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Owners</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Investors</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Roadmap</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Team</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >ISPO</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Blog</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Contact</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >Doc</a
              >
            </li>
            <li class="sm:inline">
              <a class="py-4 px-2 hover:border-b-2 border-white" href="#"
                >FAQs</a
              >
            </li>
            <li class="sm:inline">
              <Button
                class="bg-lightblue hover:bg-[#030336] rounded-xl p-2 sm:p-1 lg:px-3 lg:py-2"
                >Whitepaper</Button
              >
            </li>
          </ul>
          <!-- menu end -->
        </div>
      </div>
    </header>
    <section>
      <div
        class="w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 mx-auto text-center text-white mt-8"
      >
        <h1 class="text-xl sm:text-3xl">Private Seed Investor Dashboard</h1>
        <p class="text-sm sm:text-lg mt-3">Track your REIT Tokens</p>
        <div class="mt-5">
          <img
            class="w-10 sm:w-14 inline -mt-2.5"
            src="./assets/r-logo.png"
            alt="logo"
          />
          <span class="text-lg sm:text-2xl font-semibold ml-3"
            >778.6542 REIT</span
          >
          <input class="block w-full" type="range" />
          <div class="text-center space-x-4 mt-5">
            <button
              class="border border-lightblue rounded-xl w-36 py-1.5 hover:bg-lightblue group"
            >
              <svg
                class="inline mr-1.5 -mt-1 text-lightblue group-hover:text-darkblue fill-current"
                width="18"
                height="18"
                viewBox="0 0 19 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.666 0.771876C11.5039 0.639374 11.3171 0.540345 11.1164 0.480521C10.9158 0.420697 10.7052 0.401267 10.497 0.423355C10.2888 0.445443 10.087 0.50861 9.90339 0.609201C9.71975 0.709792 9.55789 0.845808 9.42717 1.00938L4.84183 6.75371H6.8685L10.6637 1.99738L11.8829 2.99329L8.82708 6.75371H10.8664L13.11 3.99238L15.8302 6.21379L15.3583 6.75371H15.8333C16.3055 6.75321 16.7751 6.82312 17.2267 6.96113C17.3992 6.63754 17.454 6.26412 17.3818 5.90461C17.3096 5.5451 17.1149 5.22179 16.8308 4.98988L11.666 0.771876ZM1.58333 7.54538C1.58333 7.33541 1.66674 7.13405 1.81521 6.98558C1.96367 6.83712 2.16504 6.75371 2.375 6.75371H3.2585L4.51725 5.17038H2.375C1.74511 5.17038 1.14102 5.4206 0.695621 5.866C0.250223 6.3114 0 6.91549 0 7.54538V17.0454C0 18.0952 0.417037 19.102 1.15937 19.8443C1.9017 20.5867 2.90852 21.0037 3.95833 21.0037H15.8333C16.6732 21.0037 17.4786 20.6701 18.0725 20.0762C18.6664 19.4823 19 18.6769 19 17.837V11.5037C19 10.6639 18.6664 9.8584 18.0725 9.26454C17.4786 8.67067 16.6732 8.33704 15.8333 8.33704H2.375C2.16504 8.33704 1.96367 8.25364 1.81521 8.10517C1.66674 7.9567 1.58333 7.75534 1.58333 7.54538ZM13.4583 14.6704H15.0417C15.2516 14.6704 15.453 14.7538 15.6015 14.9022C15.7499 15.0507 15.8333 15.2521 15.8333 15.462C15.8333 15.672 15.7499 15.8734 15.6015 16.0218C15.453 16.1703 15.2516 16.2537 15.0417 16.2537H13.4583C13.2484 16.2537 13.047 16.1703 12.8985 16.0218C12.7501 15.8734 12.6667 15.672 12.6667 15.462C12.6667 15.2521 12.7501 15.0507 12.8985 14.9022C13.047 14.7538 13.2484 14.6704 13.4583 14.6704Z"
                />
              </svg>
              Connected
            </button>
            <button
              class="border border-lightblue rounded-xl w-36 py-1.5 hover:bg-lightblue"
            >
              Pay
            </button>
          </div>
        </div>
        <p class="mt-3 text-sm sm:text-lg">
          Use below button to connect with wallet and track your REIT tokens
        </p>
        <p class="text-2xl font-semibold my-5">OR</p>
        <p class="text-sm sm:text-lg">
          Track your Reit tokens by entering your wallet receive address
        </p>
        <div class="relative mx-auto mt-2">
          <input
            class="w-full pl-7 py-2 sm:py-3 rounded-md focus:outline-none bg-mediumgray text-xl pr-28 sm:pr-36"
            type="text"
            placeholder="Address"
          />
          <button
            class="absolute bg-lightblue right-0 rounded-md py-2.5 sm:py-3.5 px-5 sm:px-10"
          >
            Track
          </button>
        </div>
        <a class="mt-6 block" href="#">Any Queries?</a>
        <button
          class="rounded-xl bg-lightblue px-5 py-2 hover:bg-darkblue mt-3"
        >
          <svg
            class="inline mr-2 fill-current"
            width="20"
            height="20"
            viewBox="0 0 27 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8565 1.65872C21.1353 0.892108 19.2904 0.325479 17.361 0.00327775C17.3439 2.00896e-05 17.3261 0.00211944 17.3101 0.0092855C17.2942 0.0164516 17.281 0.0283298 17.2722 0.0432751C17.0359 0.453248 16.7727 0.987658 16.5882 1.40985C14.542 1.10791 12.4617 1.10791 10.4155 1.40985C10.21 0.94195 9.97827 0.485717 9.72138 0.0432751C9.71268 0.0281458 9.6995 0.0159989 9.68363 0.00845533C9.66775 0.00091179 9.64992 -0.00166968 9.63251 0.00105557C7.70432 0.323257 5.85937 0.889886 4.13705 1.65761C4.12223 1.66375 4.10967 1.67422 4.10105 1.68761C0.600148 6.77061 -0.359449 11.7281 0.111912 16.6233C0.113224 16.6353 0.116992 16.6469 0.122988 16.6574C0.128983 16.6679 0.13708 16.6771 0.146786 16.6844C2.19017 18.1537 4.46929 19.2729 6.88872 19.9953C6.90558 20.0004 6.92362 20.0004 6.94048 19.9953C6.95734 19.9901 6.97223 19.9801 6.98321 19.9664C7.50384 19.2788 7.9652 18.5492 8.36242 17.7854C8.36794 17.775 8.37111 17.7635 8.37174 17.7517C8.37237 17.74 8.37043 17.7282 8.36605 17.7173C8.36168 17.7063 8.35498 17.6964 8.34639 17.6882C8.33781 17.6801 8.32755 17.6738 8.3163 17.6699C7.58958 17.3996 6.88544 17.0734 6.21036 16.6944C6.19823 16.6876 6.18801 16.6779 6.18061 16.6662C6.17322 16.6545 6.16888 16.6411 6.16799 16.6274C6.1671 16.6136 6.16968 16.5998 6.1755 16.5873C6.18133 16.5747 6.19021 16.5638 6.20136 16.5555C6.34311 16.4522 6.48485 16.3444 6.61985 16.2367C6.632 16.227 6.64664 16.2208 6.66213 16.2188C6.67762 16.2169 6.69336 16.2192 6.7076 16.2255C11.1253 18.1854 15.9098 18.1854 20.2758 16.2255C20.2901 16.2188 20.306 16.2162 20.3217 16.218C20.3374 16.2197 20.3523 16.2258 20.3647 16.2355C20.4997 16.3444 20.6403 16.4522 20.7832 16.5555C20.7944 16.5637 20.8035 16.5744 20.8095 16.5869C20.8155 16.5993 20.8183 16.613 20.8176 16.6268C20.817 16.6405 20.8128 16.6539 20.8057 16.6657C20.7985 16.6775 20.7884 16.6874 20.7764 16.6944C20.1037 17.0766 19.404 17.3999 18.6694 17.6688C18.6581 17.6728 18.6478 17.6792 18.6392 17.6875C18.6306 17.6958 18.6239 17.7058 18.6196 17.7168C18.6152 17.7278 18.6133 17.7397 18.6139 17.7515C18.6145 17.7633 18.6177 17.7749 18.6233 17.7854C19.0282 18.5487 19.4917 19.2753 20.0013 19.9653C20.0119 19.9795 20.0267 19.99 20.0436 19.9956C20.0605 20.0012 20.0788 20.0015 20.0958 19.9964C22.5194 19.2761 24.8023 18.1563 26.8479 16.6844C26.8579 16.6775 26.8662 16.6686 26.8725 16.6582C26.8787 16.6479 26.8826 16.6364 26.8839 16.6244C27.4464 10.9648 25.9412 6.04732 22.8914 1.68983C22.8839 1.67567 22.8715 1.66463 22.8565 1.65872ZM9.02278 13.6424C7.69307 13.6424 6.59622 12.4547 6.59622 10.9981C6.59622 9.54043 7.67169 8.35384 9.02278 8.35384C10.384 8.35384 11.4707 9.55043 11.4493 10.9981C11.4493 12.4558 10.3739 13.6424 9.02278 13.6424ZM17.9944 13.6424C16.6636 13.6424 15.5678 12.4547 15.5678 10.9981C15.5678 9.54043 16.6422 8.35384 17.9944 8.35384C19.3556 8.35384 20.4423 9.55043 20.4209 10.9981C20.4209 12.4558 19.3567 13.6424 17.9944 13.6424Z"
            />
          </svg>
          Join Discord
        </button>
        <div class="w-full bg-mediumgray pt-4 pb-10 rounded-lg mt-10">
          <p>REIT token balance</p>
          <div class="mt-3">
            <img
              class="w-14 inline -mt-2.5"
              src="./assets/r-logo.png"
              alt="logo"
            />
            <span class="text-xl font-semibold ml-2">778.6542 REIT</span>
            <p class="mt-2 text-sm sm:text-lg">
              You can claim your tokens on
              <span class="text-lightblue font-bold ml-1"> 11th Jan 2023</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
<style></style>
