import React from 'react'

function Footer() {
  return (
    <div class="@container">
    <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
      <div class="flex flex-col gap-2 text-center">
        <h1
          class="text-[#141414] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
        >
          Your Email
        </h1>
      </div>
      <div class="flex flex-1 justify-center">
        <label class="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
          <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
            <input
              placeholder="Enter your email"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-full placeholder:text-[#3E4D5B] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              value=""
            />
            <div class="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#F0F2F5] pr-2">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span class="truncate">Subscribe to my newsletter</span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
  )
}

export default Footer
