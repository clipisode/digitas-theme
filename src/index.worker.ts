import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  // customCssKey: "styles.css",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • Digitas",
    description: "Send me a quick video reply for TOPIC_TITLE — no app needed.",
  },
  brandColor: "#f47721",
  networkError: "Please check your Internet connection.",
  unknownError: "Unknown error.",
  introScreen: {
    // values: SOCIAL_NETWORK, BROWSER_NAME, INVITATION_DISPLAY_NAME, EXTRA_TERMS, BRAND_SLUG, TERMS_SLUG, TERMS_NAME, BRAND_NAME
    recordButtonLabel: "錄製視頻回复",
    // Record a video reply
    readyButtonLabel: "Ready to record",
    uploadLinkLabel: `<p>或者<span class="text-brand-primary-light underline">上傳視頻</span>。</p>`,
    // Or upload a video.
    readyDescription: `
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Hang on</h1>
      <p class="text-left text-gray-700 text-sm py-3">The SOCIAL_NETWORK browser doesn’t support direct camera uploads on Android.</p>
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
      <p class="text-left text-gray-700 text-sm py-3">Just tap the three dots menu and choose <span class="whitespace-nowrap">“Open in BROWSER_NAME”</span> to reply to <span class="whitespace-nowrap">INVITATION_DISPLAY_NAME</span>.</p>
    `,
    termsMarkup: `回复 ，即表示您同意我們的<a href="/terms">條款和條件</a>以及<a href="/privacy">隱私政策</a>EXTRA_TERMS。`,
    // By replying to INVITATION_DISPLAY_NAME, you agree to our Terms and Privacy.
    extraTerms: `和<a href="/terms/BRAND_SLUG/TERMS_SLUG">TERMS_NAME</a><span class="whitespace-nowrap">來自 BRAND_NAME</span>`,
    // plus TERMS_NAME from BRAND_NAME
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://clipisode.com">
              <img src="/icon.png" class="w-12 h-12" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-28 md:max-h-32 overflow-hidden">TOPIC_TITLE</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">將您的相機對準二維碼在您的手機上打開此邀請鏈接並向 <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">發送視頻回复。</span></p>
          <h2 class="font-heading mt-3 mb-6 text-2xl hidden">INVITATION_URL</h2>
        </div>
    </div>`,
  },
  nameScreen: {
    // values: THEME_FILE_ROOT, UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    nameLabel: "名稱",
    // Name
    nameValidation: "(必需的)",
    // (required)
    socialValidation: "(可選的)",
    // (optional)
    socialDescription:
      "Add your SOCIAL_NETWORK username so you can be tagged in the video.",
    titleUploading: "上傳進度 UPLOAD_PERCENTAGE%",
    // Uploading UPLOAD_PERCENTAGE%
    titleHitSave: "點擊保存按鈕",
    // Hit save to finish
    instructions: `添加您的姓名並單擊保存按鈕將您的視頻回復發送給 <b>INVITATION_DISPLAY_NAME</b> 。`,
    // Add your name and hit Save to send INVITATION_DISPLAY_NAME your reply.
    pleaseWait:
      "請等待您的視頻上傳完成後再離開此頁面。",
    // Please wait for your video to finish uploading before leaving this page.
    editButtonLabel: "編輯我的名字",
    // Edit my name
    saveButtonLabel: "保存我的視頻回复",
    // Save my reply
    nameScreenHeader: `
      <div class="my-6 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/icon.png" class="w-16 h-16" />
      </div>
    `,
  },
  emailScreen: {
    title: "Keep in touch",
    emailInputPlaceholder: "Email address",
    buttonLabel: "Add me",
    buttonSkipLabel: "Skip this",
  },
  closedScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center justify-between">
        <div>
          <p class="mt-12 mb-12 mx-3 text-center">This invitation is no longer <span class="whitespace-nowrap">accepting replies.</span></p>
          <div class="items-center flex flex-col space-y-5">
            <a href="https://clipisode.com">
              <img src="/icon.png" width="64" height="64" />
            </a>
            <a href="https://clipisode.com">
              <img src="/logo.png" width="220" height="32" />
            </a>
          </div>
          <p class="mt-12 mb-4 mx-3 text-center">Make unforgettable videos<br><u>with</u> your community.</p>
          <div class="hidden iosOnly text-center">
              <div><a class="downloadButton" href="https://apps.apple.com/us/app/clipisode-easy-video-collabs/id1475959226#?platform=iphone">Download the app</a></div>
          </div>
        </div>
        <div>
          <div class="hidden iosOnly">
            <div class="mb-24">
              <a href="https://apps.apple.com/us/app/clipisode-easy-video-collabs/id1475959226#?platform=iphone">
                <img class="h-10 mx-auto" src="/app-store.svg" />
              </a>
            </div>
          </div>
          <div class="hidden androidOnly mb-16">
            <p class="bg-yellow-100 text-center text-sm mx-3 mb-4">Clipisode is only available for <span class="whitespace-nowrap">iPhone and iPad</span> right now.</p>
            <p class="text-center text-sm mx-3 mb-4"><a class="text-blue-500 underline" href="care@clipisode.com">Email us</a> if you want to talk about Clipisode for Android.</p>
          </div>
        </div>
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center justify-between">
        <div>
          <p class="mt-12 mb-12 mx-3 text-center">做得好。<br/><br/>您對 <b>INVITATION_DISPLAY_NAME</b> 的視頻回复已發送。</p>
          <div class="items-center flex flex-col space-y-5">
            <a href="https://www.digitas.com/">
              <img src="THEME_FILE_ROOT/unicorn.png" width="200" height="180" />
            </a>
          </div>
        </div>
      </div>
  `,
    // Nice work! Your video request for INVITATION_DISPLAY_NAME was sent.
  },
  warningCamera: {
    // values: HOST_APP, BUTTON_TYPE, BUTTON_ACTION, INVITATION_DISPLAY_NAME
    description: `
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Camera trouble?</h1>
      <p class="text-left text-gray-700 text-sm py-3">If you couldn't record a video, it's often because HOST_APP doesn't have camera permission.</p>
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
      <p class="text-left text-gray-700 text-sm py-3">If you don't want to give HOST_APP access to your camera, just tap the BUTTON_TYPE and BUTTON_ACTION to send a video to INVITATION_DISPLAY_NAME.</p>
    `,
    dismissButtonLabel: "Close this message",
  },
  warningNetwork: {
    title: "Network error",
    description: `<p class="mb-4">Please check your connection and <span class="whitespace-nowrap">try again</span>.<p>`,
    redoButtonLabel: "Try again",
  },
  warningSilent: {
    title: "There is no audio",
    description: `<p class="mb-4">This often happens when an app doesn't have microphone permission.</p><p class="mb-4">You can change your app settings and try again or simply open this invitation in Chrome or Safari.</p>`,
    redoButtonLabel: "Record again",
    continueLinkLabel: `<p><span class="text-brand-primary">Use the silent video</span>.</p>`,
  },
  warningWide: {
    title: "Your video is wide",
    description: `<p class="mb-4">Tall videos work best because Clipisode combines your video with the host's tall answer video.</p><p class="mb-4"p>We can crop this video and make it tall or you can choose a new video.</p>`,
    redoButtonLabel: "Choose a new video",
    continueLinkLabel: `<p><span class="text-brand-primary">Use the wide video</span>.</p>`,
  },
};
