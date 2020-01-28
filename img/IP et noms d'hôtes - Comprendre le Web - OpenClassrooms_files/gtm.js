
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"237",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location;if(a.pathname.match(\/^\\\/courses\\\/.*\/)\u0026\u0026(a=a.pathname.split(\"\/\"),a[2]))return a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.path.match(\/\\\/dashboard\/),b=!document.getElementById(\"list-course-followed\");return a\u0026\u0026b})();"]
    },{
      "function":"__jsm",
      "convert_case_to":2,
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".hs-button.primary.large\").getAttribute(\"value\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(document).find(\"title\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.pathname.split(\"\/\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.pathname.split(\"\/\"),b=\"\";\"paths\"==a[2]\u0026\u0026(b=a[3]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[\/\\\/[a-z]{2}\\\/$\/,\/\\\/[a-z]{2}\\\/paths\/,\/\\\/[a-z]{2}\\\/dashboard\/,\/\\\/[a-z]{2}\\\/membres\/,\/\\\/[a-z]{2}\\\/student-profile$\/,\/\\\/[a-z]{2}\\\/apprenticeship$\/,\/\\\/[a-z]{2}\\\/employers$\/,\/\\\/[a-z]{2}\\\/mentorship\/,\/\\\/[a-z]{2}\\\/student-welcome$\/,\/\\\/[a-z]{2}\\\/learning-journey-introduction$\/,\/\\\/[a-z]{2}\\\/path-start$\/,\/\\\/[a-z]{2}\\\/courses\\\/1603881-\/,\/\\\/.*\\\/subscriptions\\\/subscribe\/,\/\\\/[a-z]{2}\\\/application\/,\/\\\/[a-z]{2}\\\/register\/,\/\\\/[a-z]{2}\\\/login\/].reduce(function(b,a){a=!!document.location.pathname.match(a);\nreturn b||a},!1)})();"]
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cmapi_cookie_privacy"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-19807070-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscriptionSchedule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"premiumType"
    },{
      "function":"__v",
      "vtp_name":"total",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"subscriptionId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__j",
      "vtp_name":"App.user.email"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"App.user.age"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signupDate"
    },{
      "function":"__j",
      "vtp_name":"App.user.gender"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lastSignInDate"
    },{
      "function":"__j",
      "vtp_name":"App.user.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__j",
      "vtp_name":"App.user.isPremium"
    },{
      "function":"__j",
      "vtp_name":"App.user.premiumType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pathCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pathCategoryInterest"
    },{
      "function":"__j",
      "vtp_name":"App.data.currentCourse.courseTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coursePartNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"courseChapterNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isCourseChapterLast"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"projectTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signInType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signUpType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteGenerator"
    },{
      "function":"__j",
      "vtp_name":"App.user.locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"premiumPlusSubscriptionDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"referrer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageTitle"
    },{
      "function":"__j",
      "vtp_name":"App.data.currentLearningPath.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pathDuration"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isCourseCertifying"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isPartTheLast"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapterTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chapterPartNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isChapterTheLast"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userHasLinkedin"
    },{
      "function":"__j",
      "vtp_name":"App.user.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contractType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasFoundAJob"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canWorkInFrance"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"diplomaLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userMobility"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"remote"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"workContractSearched"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"languageSpoken"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"languageSpokenLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pathInterest"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"receiveJobOffers"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sendProfile"
    },{
      "function":"__j",
      "vtp_name":"App.user.isMentor"
    },{
      "function":"__c",
      "vtp_value":"UA-19807070-2"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",23]],["map","index","2","dimension",["macro",24]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",29]],["map","index","5","dimension",["macro",26]],["map","index","6","dimension",["macro",27]],["map","index","7","dimension",["macro",28]],["map","index","8","dimension",["macro",29]],["map","index","9","dimension",["macro",30]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","14","dimension",["macro",35]],["map","index","15","dimension",["macro",36]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",38]],["map","index","18","dimension",["macro",39]],["map","index","19","dimension",["macro",40]],["map","index","20","dimension",["macro",41]],["map","index","21","dimension",["macro",42]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","24","dimension",["macro",45]],["map","index","25","dimension",["macro",46]],["map","index","26","dimension",["macro",47]],["map","index","27","dimension",["macro",48]],["map","index","28","dimension",["macro",49]],["map","index","29","dimension",["macro",50]],["map","index","30","dimension",["macro",26]],["map","index","31","dimension",["macro",51]],["map","index","32","dimension",["macro",52]],["map","index","33","dimension",["macro",53]],["map","index","34","dimension",["macro",54]],["map","index","35","dimension",["macro",55]],["map","index","36","dimension",["macro",56]],["map","index","37","dimension",["macro",57]],["map","index","38","dimension",["macro",58]],["map","index","39","dimension",["macro",59]],["map","index","40","dimension",["macro",60]],["map","index","41","dimension",["macro",61]],["map","index","42","dimension",["macro",62]],["map","index","43","dimension",["macro",63]],["map","index","44","dimension",["macro",64]],["map","index","45","dimension",["macro",65]],["map","index","46","dimension",["macro",66]],["map","index","47","dimension",["macro",67]],["map","index","48","dimension",["macro",68]],["map","index","49","dimension",["macro",69]],["map","index","50","dimension",["macro",70]],["map","index","51","dimension",["macro",71]],["map","index","52","dimension",["macro",72]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"IS_OUTBOUND",
      "vtp_affiliatedDomains":"openclassrooms.com"
    },{
      "function":"__j",
      "vtp_name":"App.user.language"
    },{
      "function":"__j",
      "vtp_name":"App.user.displayableName"
    },{
      "function":"__j",
      "vtp_name":"App.user.createdAt"
    },{
      "function":"__j",
      "vtp_name":"App.data.currentLearningPath.isStateEndorsed"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"product.name",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"product",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"coupon",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"currency",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.id"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.name"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"premiumSubscriptionTypeName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"id",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"21082"
    },{
      "function":"__j",
      "vtp_name":"App.data.currentCourse.isCertifying"
    },{
      "function":"__j",
      "vtp_name":"App.data.currentLearningPath.id"
    },{
      "function":"__c",
      "vtp_value":"792126324"
    },{
      "function":"__c",
      "vtp_value":"11003014"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","Pja5CP2m0IoBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","vEkXCK7D0IoBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","TnEvCNHO0IoBEPTG2_kC"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","iBaeCNyCw4oBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","2vvdCNbl0IoBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","VQU6CN_l0IoBEPTG2_kC"]]
    },{
      "function":"__c",
      "vtp_value":"8864214"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","ja0WCIH42IoBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","UV5MCJ-Py4oBEPTG2_kC"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","K_1ICKSRy4oBEPTG2_kC"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","Learn-More-Development-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","Learn-More-UX-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","Learn-More-Product-Management-CTA-Clicks"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","Start-Now-Development-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","Start-Now-UX-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","Start-Now-Product-Management-CTA-Clicks"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","Submit-Development-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","Submit-UX-CTA-Clicks"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","Submit-Product-Management-CTA-Clicks"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",12],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","info\\.openclassrooms\\.com\\\/development-uk","value","Development Button"],["map","key","info\\.openclassrooms\\.com\\\/ux-design-uk","value","UX Button"],["map","key","info\\.openclassrooms\\.com\\\/product-management-uk","value","Product Management Button"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",15],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/en\/paths\/76-ux-designer","value","pyX6CJu_84oBEPTG2_kC"],["map","key","\/en\/paths","value","SUjnCLLMiYsBEPTG2_kC"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",15],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/en\/paths\/76-ux-designer","value","UX-Designer"],["map","key","\/en\/paths","value","Development"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",15],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/en\/paths\/76-ux-designer","value","UX Design Form Submission"],["map","key","\/en\/paths","value","Development Form submission"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",15],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/en\/paths\/76-ux-designer","value","UX-Designer-Form-Submission"],["map","key","\/en\/paths","value","Development-Form-Submission"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"connectionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hs-form-guid"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_id":"50013",
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"advisor",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",11],
      "vtp_eventAction":"click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":63
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963282505",
      "vtp_conversionLabel":"CoSFCK7GvIkBEMmMqssD",
      "vtp_url":["macro",13],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":78
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"leadq0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"conve0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8985731",
      "vtp_ordinalStandard":["macro",16],
      "vtp_url":["macro",13],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":138
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"visit0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"visit0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8985731",
      "vtp_ordinalStandard":["macro",16],
      "vtp_url":["macro",13],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":139
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",19],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",20],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"leadt0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"conve0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8985731",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",13],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":140
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_hotjar_site_id":"1160312",
      "tag_id":143
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",23]],["map","index","2","dimension",["macro",24]],["map","index","3","dimension",["macro",25]],["map","index","5","dimension",["macro",26]],["map","index","6","dimension",["macro",27]],["map","index","7","dimension",["macro",28]],["map","index","8","dimension",["macro",29]],["map","index","9","dimension",["macro",30]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","14","dimension",["macro",35]],["map","index","15","dimension",["macro",36]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",38]],["map","index","18","dimension",["macro",39]],["map","index","19","dimension",["macro",40]],["map","index","20","dimension",["macro",41]],["map","index","21","dimension",["macro",42]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","24","dimension",["macro",45]],["map","index","25","dimension",["macro",46]],["map","index","26","dimension",["macro",47]],["map","index","27","dimension",["macro",48]],["map","index","28","dimension",["macro",49]],["map","index","29","dimension",["macro",50]],["map","index","30","dimension",["macro",26]],["map","index","31","dimension",["macro",51]],["map","index","32","dimension",["macro",52]],["map","index","33","dimension",["macro",53]],["map","index","34","dimension",["macro",54]],["map","index","35","dimension",["macro",55]],["map","index","36","dimension",["macro",56]],["map","index","37","dimension",["macro",57]],["map","index","38","dimension",["macro",58]],["map","index","39","dimension",["macro",59]],["map","index","40","dimension",["macro",60]],["map","index","41","dimension",["macro",61]],["map","index","42","dimension",["macro",62]],["map","index","43","dimension",["macro",63]],["map","index","44","dimension",["macro",64]],["map","index","45","dimension",["macro",65]],["map","index","46","dimension",["macro",66]],["map","index","47","dimension",["macro",67]],["map","index","48","dimension",["macro",68]],["map","index","49","dimension",["macro",69]],["map","index","50","dimension",["macro",70]],["map","index","51","dimension",["macro",71]],["map","index","52","dimension",["macro",72]],["map","index","4","dimension",["macro",29]]],
      "vtp_trackingId":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":151
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963282505",
      "vtp_conversionLabel":"XU8bCMO0sZIBEMmMqssD",
      "vtp_url":["macro",13],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":152
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"premium",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",11],
      "vtp_eventAction":"click",
      "vtp_eventLabel":"bookacall",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-WRLK5ZD",
      "vtp_gaSettings":["macro",11],
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",76],
      "vtp_eventCategory":["macro",77],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",79],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",23]],["map","index","2","dimension",["macro",24]],["map","index","3","dimension",["macro",25]],["map","index","5","dimension",["macro",26]],["map","index","6","dimension",["macro",27]],["map","index","7","dimension",["macro",28]],["map","index","8","dimension",["macro",29]],["map","index","9","dimension",["macro",30]],["map","index","10","dimension",["macro",31]],["map","index","11","dimension",["macro",32]],["map","index","12","dimension",["macro",33]],["map","index","13","dimension",["macro",34]],["map","index","14","dimension",["macro",35]],["map","index","15","dimension",["macro",36]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",38]],["map","index","18","dimension",["macro",39]],["map","index","19","dimension",["macro",40]],["map","index","20","dimension",["macro",41]],["map","index","21","dimension",["macro",42]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","24","dimension",["macro",45]],["map","index","25","dimension",["macro",46]],["map","index","26","dimension",["macro",47]],["map","index","27","dimension",["macro",48]],["map","index","28","dimension",["macro",49]],["map","index","29","dimension",["macro",50]],["map","index","30","dimension",["macro",26]],["map","index","31","dimension",["macro",51]],["map","index","32","dimension",["macro",52]],["map","index","33","dimension",["macro",53]],["map","index","34","dimension",["macro",54]],["map","index","35","dimension",["macro",55]],["map","index","36","dimension",["macro",56]],["map","index","37","dimension",["macro",57]],["map","index","38","dimension",["macro",58]],["map","index","39","dimension",["macro",59]],["map","index","40","dimension",["macro",60]],["map","index","41","dimension",["macro",61]],["map","index","42","dimension",["macro",62]],["map","index","43","dimension",["macro",63]],["map","index","44","dimension",["macro",64]],["map","index","45","dimension",["macro",65]],["map","index","46","dimension",["macro",66]],["map","index","47","dimension",["macro",67]],["map","index","48","dimension",["macro",68]],["map","index","49","dimension",["macro",69]],["map","index","50","dimension",["macro",70]],["map","index","51","dimension",["macro",71]],["map","index","52","dimension",["macro",72]],["map","index","4","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-19807070-2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":172
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/lot.neatpowr.com\/trk_o?adv_sub=SUBID",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",16],
      "tag_id":178
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":179
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":180
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963282505",
      "vtp_conversionLabel":"oY-GCJfOuKUBEMmMqssD",
      "vtp_url":["macro",13],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":212
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",11],
      "vtp_eventAction":"Clicked",
      "vtp_eventLabel":"Request-free-demo",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":219
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.clickmeter.com\/conversion.aspx?id=4B3C28C642B74DC187451D53FFE282AE\u0026val=0.00\u0026param=empty\u0026com=0.00\u0026comperc=0.00\u0026pixel=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",16],
      "tag_id":226
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963282505",
      "vtp_conversionLabel":"u9g5COnpzLUBEMmMqssD",
      "vtp_url":["macro",13],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":227
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ExternalResourceRedirection",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"OutboundLinkClicked",
      "vtp_eventLabel":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":228
    },{
      "function":"__cl",
      "tag_id":229
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_70",
      "tag_id":230
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_74",
      "tag_id":231
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_75",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_107",
      "tag_id":238
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_108",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_117",
      "tag_id":241
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_143",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__cl",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"838693_308",
      "tag_id":249
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.satismeter=window.satismeter||function(){(window.satismeter.q=window.satismeter.q||[]).push(arguments)};window.satismeter.l=1*new Date;var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0].parentNode;a.async=1;a.src=\"https:\/\/app.satismeter.com\/satismeter.js\";b.appendChild(a)})();\nsatismeter({writeKey:\"gJsvzWYbMoPRGrAA\",userId:\"",["escape",["macro",27],7],"\",language:\"",["escape",["macro",83],7],"\",traits:{email:\"",["escape",["macro",21],7],"\",name:\"",["escape",["macro",84],7],"\",createdAt:\"",["escape",["macro",85],7],"\",country:\"",["escape",["macro",59],7],"\",gender:\"",["escape",["macro",25],7],"\",premiumType:\"",["escape",["macro",30],7],"\",premium:\"",["escape",["macro",29],7],"\",typeNPS:\"global\",language:\"",["escape",["macro",83],7],"\",locale:\"",["escape",["macro",83],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.analytics.track(\"Clicked Talk To An Advisor Button\",{},{HubSpot:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");fbq(\"track\",\"ViewContent\");\u003C\/script\u003E\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1570554156513134\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1570554156513134\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-963282505\/uJbxCKCNr4kBEMmMqssD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003Efunction gtag_report_conversion(a){var b=function(){\"undefined\"!=typeof a\u0026\u0026(window.location=a)};gtag(\"event\",\"conversion\",{send_to:\"AW-963282505\/4vZcCNrcvIkBEMmMqssD\",event_callback:b});return!1};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-963282505\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-963282505\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o04ph\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"04a48b5e1704448284be9a1d89d2dd13\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/04a48b5e1704448284be9a1d89d2dd13\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"04a48b5e1704448284be9a1d89d2dd13\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/04a48b5e1704448284be9a1d89d2dd13\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"AddToCart\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"04a48b5e1704448284be9a1d89d2dd13\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/04a48b5e1704448284be9a1d89d2dd13\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"GenerateLead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"04a48b5e1704448284be9a1d89d2dd13\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/04a48b5e1704448284be9a1d89d2dd13\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.satismeter=window.satismeter||function(){(window.satismeter.q=window.satismeter.q||[]).push(arguments)};window.satismeter.l=1*new Date;var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0].parentNode;a.async=1;a.src=\"https:\/\/app.satismeter.com\/satismeter.js\";b.appendChild(a)})();\nsatismeter({writeKey:\"ysfNGLxD7akefTAC\",userId:\"",["escape",["macro",27],7],"\",language:\"",["escape",["macro",83],7],"\",traits:{email:\"",["escape",["macro",21],7],"\",name:\"",["escape",["macro",84],7],"\",createdAt:\"",["escape",["macro",85],7],"\",country:\"",["escape",["macro",59],7],"\",gender:\"",["escape",["macro",25],7],"\",premiumType:\"",["escape",["macro",30],7],"\",premium:\"",["escape",["macro",29],7],"\",typeNPS:\"path\",language:\"",["escape",["macro",83],7],"\",locale:\"",["escape",["macro",83],7],"\",title:\"",["escape",["macro",48],7],"\",isStateEndorsed:\"",["escape",["macro",86],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"23001547\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.analytics.track(\"Applied to \"+",["escape",["macro",4],8,16],"+\" - Breezy\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-963282505\/ZaRUCO7os5EBEMmMqssD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getParameterByName(b,c){c||(c=window.location.href);b=b.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var a=new RegExp(\"[?\\x26]\"+b+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(a=a.exec(c))?a[2]?decodeURIComponent(a[2].replace(\/\\+\/g,\" \")):\"\":null}var utm_source=getParameterByName(\"utm_source\"),utm_medium=getParameterByName(\"utm_medium\"),utm_campaign=getParameterByName(\"utm_campaign\"),cta,params=[],q;utm_source\u0026\u0026params.push(\"utm_source\\x3d\"+utm_source);utm_medium\u0026\u0026params.push(\"utm_medium\\x3d\"+utm_medium);\nutm_campaign\u0026\u0026params.push(\"utm_campaign\\x3d\"+utm_campaign);var CTAs=document.getElementsByClassName(\"learningPathCta__buttonInformation  button button--secondaryOnContrastedBackground  spacer-half\");for(i=0;i\u003CCTAs.length;i++){var href=CTAs[i].href;-1\u003Chref.indexOf(\"?\")?q=\"\\x26\":q=\"?\";CTAs[i].href=href+q+params.join(\"\\x26\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-963282505\/uWkqCNXK55EBEMmMqssD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"23001601\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/2080865.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"remind-lead-FR\",content_category:\"Site-FR\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"submitted-path-lead-FR\",content_category:\"Site-FR\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"lead-alternance-FR\",content_category:\"Site-FR\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"premium-plus\",content_category:\"Site-FR\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"remind-lead-EN\",content_category:\"Site-EN\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"talk-to-an-advisor-EN\",content_category:\"Site-EN\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"premium-plus\",content_category:\"Site-EN\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getDataEvent(a){var b=a.getAttribute(\"data-event\");return b?b:(a=a.parentElement)?getDataEvent(a):null}document.body.addEventListener(\"click\",function(a){if(a=getDataEvent(a.target))a=a.split(\"|\"),dataLayer.push({eventCategory:a[0],eventAction:a[1],eventLabel:a[2]+\"|\"+a[3],event:\"uaevent\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.satismeter=window.satismeter||function(){(window.satismeter.q=window.satismeter.q||[]).push(arguments)};window.satismeter.l=1*new Date;var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0].parentNode;a.async=1;a.src=\"https:\/\/app.satismeter.com\/satismeter.js\";b.appendChild(a)})();\nsatismeter({writeKey:\"kpYur9CcrYuGh5Ar\",userId:\"",["escape",["macro",27],7],"\",language:\"",["escape",["macro",83],7],"\",traits:{email:\"",["escape",["macro",21],7],"\",name:\"",["escape",["macro",84],7],"\",createdAt:\"",["escape",["macro",85],7],"\",country:\"",["escape",["macro",59],7],"\",gender:\"",["escape",["macro",25],7],"\",premiumType:\"",["escape",["macro",30],7],"\",premium:\"",["escape",["macro",29],7],"\",typeNPS:\"path\",language:\"",["escape",["macro",83],7],"\",locale:\"",["escape",["macro",83],7],"\",title:\"",["escape",["macro",48],7],"\",isStateEndorsed:\"",["escape",["macro",86],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getParameterByName(b,c){c||(c=window.location.href);b=b.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var a=new RegExp(\"[?\\x26]\"+b+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(a=a.exec(c))?a[2]?decodeURIComponent(a[2].replace(\/\\+\/g,\" \")):\"\":null}var utm_source=getParameterByName(\"utm_source\"),utm_medium=getParameterByName(\"utm_medium\"),utm_campaign=getParameterByName(\"utm_campaign\"),cta,params=[],q;utm_source\u0026\u0026params.push(\"utm_source\\x3d\"+utm_source);utm_medium\u0026\u0026params.push(\"utm_medium\\x3d\"+utm_medium);\nutm_campaign\u0026\u0026params.push(\"utm_campaign\\x3d\"+utm_campaign);var CTAs=document.querySelectorAll(\"a[data-event*\\x3d'click|Path|ApplyApprenticeship']\");for(i=0;i\u003CCTAs.length;i++){var href=CTAs[i].href;-1\u003Cwindow.location.href.indexOf(\"?\")\u0026\u0026(CTAs[i].href=href+\"?\"+params.join(\"\\x26\"))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getParameterByName(b,c){c||(c=window.location.href);b=b.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var a=new RegExp(\"[?\\x26]\"+b+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(a=a.exec(c))?a[2]?decodeURIComponent(a[2].replace(\/\\+\/g,\" \")):\"\":null}var utm_source=getParameterByName(\"utm_source\"),utm_medium=getParameterByName(\"utm_medium\"),utm_campaign=getParameterByName(\"utm_campaign\"),cta,params=[],q;utm_source\u0026\u0026params.push(\"utm_source\\x3d\"+utm_source);utm_medium\u0026\u0026params.push(\"utm_medium\\x3d\"+utm_medium);\nutm_campaign\u0026\u0026params.push(\"utm_campaign\\x3d\"+utm_campaign);var CTAs=document.getElementsByClassName(\"oc-button oc-button--primaryOnContrastedBackground\");for(i=0;i\u003CCTAs.length;i++){var href=CTAs[i].href;-1\u003Cwindow.location.href.indexOf(\"?\")\u0026\u0026(CTAs[i].href=href+\"?\"+params.join(\"\\x26\"))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(d,e){var b=\"0016a8de4d6eadecdb3e776043d6cafd8d\";if(d.obApi){var c=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]};d.obApi.marketerId=c(d.obApi.marketerId).concat(c(b))}else{var a=d.obApi=function(){a.dispatch?a.dispatch.apply(a,arguments):a.queue.push(arguments)};a.version=\"1.1\";a.loaded=!0;a.marketerId=b;a.queue=[];b=e.createElement(\"script\");b.async=!0;b.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";b.type=\"text\/javascript\";c=e.getElementsByTagName(\"script\")[0];\nc.parentNode.insertBefore(b,c)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10076934\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10076934\",qstrings:{et:\"custom\",ea:\"lead\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"lead_pariscode_mars19\",content_category:\"Site-FR\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-963282505\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-963282505\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=50013\u0026amp;conversionId=913985\u0026amp;fmt=gif\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "metadata":["map"],
      "unlimited":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_ids:\"B2B MQL Form\",content_type:\"B2B Recruter un talent Form\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"SubmitApplication\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=50013\u0026amp;conversionId=914057\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=50013\u0026amp;conversionId=948121\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=50013\u0026amp;conversionId=1068889\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar d=document.getElementById(\"showDisclaimer\"),e=document.createElement(\"div\"),e2=document.createElement(\"div\");e.id=\"teconsent\";e2.id=\"consent_blackbar\";d.appendChild(e);d.appendChild(e2);\u003C\/script\u003E\n\u003Cstyle\u003E\n  .truste-button1, .truste-button2 {\n    border-style: solid;\n  }\n  #consent_blackbar {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    z-index: 2;\n  }\n  #truste-consent-content {\n  \tmargin-left: 8px;\n    margin-right: 8px;\n    max-width: 100% !important;\n  }\n  \n  #teconsent a {\n  \tdisplay: none;\n  }\n  \n  @media only screen and (min-width: 992px) {\n    #truste-consent-content {\n      display: flex;\n      justify-content: space-between;\n    }\n    \n  \t#truste-consent-buttons {\n      white-space: nowrap;\n  \t}\t\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/javascript\" crossorigin src=\"\/\/consent.truste.com\/notice?domain=openclassrooms.com\u0026amp;language=fr\u0026amp;c=teconsent\u0026amp;js=nj\u0026amp;noticeType=bb\u0026amp;gtm=1\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":207
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"message\",function(a){\"hsFormCallback\"===a.data.type\u0026\u0026\"onFormSubmitted\"===a.data.eventName\u0026\u0026window.dataLayer.push({event:\"hubspot-form-success\",\"hs-form-guid\":a.data.id})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar d=document.getElementById(\"showDisclaimer\"),e=document.createElement(\"div\"),e2=document.createElement(\"div\");e.id=\"teconsent\";e2.id=\"consent_blackbar\";d.appendChild(e);d.appendChild(e2);\u003C\/script\u003E\n\u003Cstyle\u003E\n  .truste-button1, .truste-button2 {\n    border-style: solid;\n  }\n  #consent_blackbar {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    z-index: 2;\n  }\n  #truste-consent-content {\n  \tmargin-left: 8px;\n    margin-right: 8px;\n    max-width: 100% !important;\n  }\n  \n  \n  #teconsent a {\n  \tdisplay: none;\n  }\n  \n  @media only screen and (min-width: 992px) {\n    #truste-consent-content {\n      display: flex;\n      justify-content: space-between;\n    }\n    \n    #truste-consent-buttons {\n      white-space: nowrap;\n  \t}\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\" crossorigin data-gtmsrc=\"\/\/consent.truste.com\/notice?domain=openclassrooms.com\u0026amp;language=en\u0026amp;c=teconsent\u0026amp;js=nj\u0026amp;noticeType=bb\u0026amp;gtm=1\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,c,d,f,e,g){if(!a[e]){var b=a[e]=function(){b.process?b.process.apply(b,arguments):b.queue.push(arguments)};b.queue=[];b.t=1*new Date;a=c.createElement(d);a.async=!0;a.src=f;c=c.getElementsByTagName(d)[0];c.parentNode.insertBefore(a,c)}}(window,document,\"script\",\"https:\/\/s.kmtx.io\/kmpx.js\",\"kmpx\");kmpx(\"init\",\"91\");kmpx(\"event\",\"visit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,c,d,f,e,g){if(!a[e]){var b=a[e]=function(){b.process?b.process.apply(b,arguments):b.queue.push(arguments)};b.queue=[];b.t=1*new Date;a=c.createElement(d);a.async=!0;a.src=f;c=c.getElementsByTagName(d)[0];c.parentNode.insertBefore(a,c)}}(window,document,\"script\",\"https:\/\/s.kmtx.io\/kmpx.js\",\"kmpx\");kmpx(\"init\",\"91\");kmpx(\"event\",\"lead\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.reload();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.$crisp=[];window.CRISP_WEBSITE_ID=\"32518673-f8b8-4bd8-aa0c-7f185209b56b\";(function(){d=document;s=d.createElement(\"script\");s.src=\"https:\/\/client.crisp.chat\/l.js\";s.async=1;d.getElementsByTagName(\"head\")[0].appendChild(s)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=50013\u0026amp;conversionId=1536225\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4042886\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-9607146\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-9607146\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-9607146\/lead123\/leadt0+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9607146;type=lead123;cat=leadt0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"3"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"permit"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"Talk to an advisor"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"2"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"thank-you-catalogue"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"Submitted Path Lead Form"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"info\\.openclassrooms\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/paths-thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"monthly"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"Premium Plus"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/en"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"Completed Order #2"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/fr"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"simple-it"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"openclassrooms.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"stage"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":".lan"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"openclassrooms.breezy.hr"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"http:\/\/info.openclassrooms.com\/thank-you-apprenticeships"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"calendly.com\/openclassroomsen\/bookacall"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)838693_143($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"uaevent"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/paths-thank-you-email\\?submissionGuid.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"Order Completed"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"info\\.openclassrooms\\.com"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/fr\/confirmation\/formations\/offres-premium"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"hubspot-form-success"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"thank-you.html"
    },{
      "function":"_cn",
      "arg0":["macro",81],
      "arg1":"path_details_topbar_start_button"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/fr\/paths\/84-community-manager"
    },{
      "function":"_eq",
      "arg0":["macro",82],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)838693_308($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"openclassrooms\\.com\\\/en\\\/paths",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/paths\\\/.+"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/courses\\\/.+\\\/.+"
    },{
      "function":"_ew",
      "arg0":["macro",12],
      "arg1":"\/edit"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/fr\/paths"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"Signed Up"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/en\/subscriptions\/subscribe\/"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/projects\\\/.+"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"openclassrooms\\.breezy\\.hr.*apply\\\/submitted"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"openclassrooms\\.breezy\\.hr"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/p\\\/664e8c67734801\\\/apply\\\/submitted"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"openclassrooms\\.breezy\\.hr",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",22],
      "arg1":"https:\/\/openclassrooms.com\/en\/paths\/"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"^openclassrooms\\.com"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"https:\/\/info.openclassrooms.com\/thank-you-page"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"calendly"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"invitee_meeting_scheduled"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/mentorship"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"openclassrooms\\.com"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/fr\\\/paths\\\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"https:\/\/openclassrooms.com\/fr\/apprenticeship"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/fr\/"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/p\\\/(9723086671ca01|191268c4369801|dc5dc092e44b01).*\\\/apply\\\/submitted$"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"hs-button primary large"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/business"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"RECRUTER UN ÉTUDIANT"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"employers"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"recruter-des-profils-num"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"Prendre rendez-vous"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"now.openclassrooms.com\/recruter-alternance\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"is_ios_app=true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"openclassrooms.com"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"https:\/\/openclassrooms.com\/fr\/paths"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/fr\\\/lp\\\/(systemes-et-reseaux|developpement|data|ressources-humaines|pedagogie|marketing-communication|design|entrepreneuriat|gestion-de-projet)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\\/fr\\\/confirmation\\\/(systemes-et-reseaux|developpement|data|ressources-humaines|pedagogie|marketing-et-communication|design|entrepreneuriat|gestion-de-projet)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"cookie_prefs_set"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"https:\/\/info.openclassrooms.com\/esn-retention-des-talents"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"info.openclassrooms.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"info.openclassrooms.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/confirmation"
    }],
  "rules":[
    [["if",0],["add",0,2,11,42,46,51,52,53,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41]],
    [["if",3,4],["add",1,43]],
    [["if",0,6],["add",3]],
    [["if",7],["add",4,45,49,55,58,66]],
    [["if",8,9,10],["add",4,48,50,65]],
    [["if",0,11],["add",5,72]],
    [["if",12,13,14,15],["add",6,71]],
    [["if",12,13,15,16],["add",6,68]],
    [["if",0,17],["unless",18,19,20,21],["add",7]],
    [["if",0,22],["add",8,15]],
    [["if",0,23],["add",9]],
    [["if",24,25,26],["add",10,62,63]],
    [["if",27],["add",12]],
    [["if",8,10,28],["add",13]],
    [["if",29],["add",14]],
    [["if",10,30,31],["add",16]],
    [["if",32],["add",17]],
    [["if",0,33],["add",18]],
    [["if",4,34,35],["add",19]],
    [["if",25,36,37],["add",20]],
    [["if",0,38],["add",33]],
    [["if",0,42],["add",44]],
    [["if",43],["add",47,56]],
    [["if",0,44],["add",54]],
    [["if",0,45],["add",57]],
    [["if",10,46],["add",59]],
    [["if",10,47,48],["add",60,67]],
    [["if",10,48,49],["add",60]],
    [["if",0,50],["add",61]],
    [["if",10,51],["add",64,76,77,96,97]],
    [["if",10,52],["add",69]],
    [["if",27,53,54],["add",70]],
    [["if",10,55,56],["add",73]],
    [["if",0,57,58],["add",74]],
    [["if",0,59],["add",75]],
    [["if",7,60],["add",78,92]],
    [["if",10,47,61],["add",79,80]],
    [["if",4,62,63],["add",81,83]],
    [["if",4,64,65],["add",82,84]],
    [["if",4,62,66],["add",85,86]],
    [["if",4,67,68],["add",87]],
    [["if",0,16],["add",88]],
    [["if",0,63],["add",89,94]],
    [["if",0,14],["add",90]],
    [["if",10,70,71],["add",91]],
    [["if",8,10,72],["add",91]],
    [["if",8,10,73],["add",92]],
    [["if",74],["add",93]],
    [["if",4,62,75],["add",95]],
    [["if",10,76],["add",96,97]],
    [["if",10,77,78],["add",98]],
    [["if",0,2],["unless",1],["block",0,1,3,5,6,8,9,10,12,14,43,44,45,46,47,49,52,53,54,55,56,58,61,62,63,66,68,70,71,72,78,81,82,83,84,85,86,87,89]],
    [["if",0],["unless",2],["block",0,2,3,5,7,8,9,11,42,44,46,51,52,53,54,57,61,72,74,75,89]],
    [["if",0,2],["unless",5],["block",2,7,11,42,51,57,74,75]],
    [["if",2,10],["unless",1],["block",4,13,16,48,50,59,60,64,65,67,69,76,77,79,80,91,92]],
    [["if",10],["unless",2],["block",4,13,16,48,50,59,60,64,65,67,69,73,76,77,79,80,91,92]],
    [["if",0,39],["block",42]],
    [["if",0,40],["unless",41],["block",42]],
    [["if",2,10],["unless",5],["block",73]],
    [["if",0,69],["block",88,90]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={bf:!0},fa={};try{fa.__proto__=ea;da=fa.bf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},B=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Ra=[],Sa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ta=function(a){return Sa[a]},Ua=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ya=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},cb=function(a){return bb[a]};Ra[7]=function(a){return String(a).replace(Ya,cb)};
Ra[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ya,cb)+"'"}};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},nb=function(a){return mb[a]};Ra[16]=function(a){return a};var pb;
var qb=[],rb=[],sb=[],tb=[],ub=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):pb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Eb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=qb[f];if(!h||b.Jc(h))return;c[f]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.If(d,k))}catch(y){b.ke&&b.ke(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Cb(a[n],b,c);yb&&(m=m||q===yb.qb);d.push(q)}return yb&&m?yb.Lf(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&ua(a[1])&&"macro"===a[1][0]&&yb.qg(a))return yb.Rg(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var p=a[1];if(!tb[p])throw Error("Unable to resolve tag reference "+p+".");return d={ae:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{od:a("convert_case_to"),pd:a("convert_false_to"),qd:a("convert_null_to"),rd:a("convert_true_to"),sd:a("convert_undefined_to"),Dh:a("debug_mode_metadata"),oa:a("function"),Le:a("instance_name"),Pe:a("live_only"),Re:a("malware_disabled"),Se:a("metadata"),Eh:a("original_vendor_template_id"),Ve:a("once_per_event"),Bd:a("once_per_load"),Gd:a("setup_tags"),Id:a("tag_id"),Jd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<rb.length;e++){var f=rb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var bc,cc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.tf&&(l["fix_"+m]=!0),l.be=l.be||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,O:p.O,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,z){var C=y||x||z||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=C;t[w]=A.textContent||A.innerText||C});return{tagName:p[1],O:t,nb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=q[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.be&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.je=function(){return this[this.length-1]};v.Lc=function(A){var E=this.je();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Hf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.nb=p.test(A.tagName)||A.nb);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Lc("TABLE")?(k="<TBODY>"+k,C()):l.Nh&&t.test(E)&&v.Hf(E)?v.Lc(E)?x():(k="</"+A.tagName+">"+k,C()):A.nb||v.push(A)},endTag:function(A){v.je()?l.Vf&&!v.Lc(A.tagName)?x():v.pop():l.Vf&&(y(),C())}},C=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){C();return w(y())}}();return{append:function(p){k+=p},$g:u,Th:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Uh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Wh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Vh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.P=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.O){var u=m.O[q];n+=
" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.nb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.C=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;bc=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(p,q[t],t)}function d(q,u,p){for(var t in q)q.hasOwnProperty(t)&&u.call(p,t,q[t])}function e(q,
u){d(u,function(p,t){q[p]=t});return q}function f(q,u){q=q||{};d(u,function(p,t){b(q[p])||(q[p]=t)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(t){u.push(t)});return u}}var k={hf:a,jf:a,kf:a,lf:a,vf:a,wf:function(q){return q},done:a,error:function(q){throw q;},dh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,ob:v.defaultView||v.parentWindow,Ga:v,Sb:bc("",{tf:!0}),xc:[p],Uc:"",Vc:v.createElement(p.nodeName),kb:[],va:[]});q(this.Vc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.va,arguments);for(var p;!this.Fb&&this.va.length;)p=this.va.shift(),"function"===typeof p?this.Bf(p):this.gd(p)};u.prototype.Bf=function(p){var t={type:"function",value:p.name||p.toString()};this.Rc(t);p.call(this.ob,this.Ga);this.ne(t)};
u.prototype.gd=function(p){this.Sb.append(p);for(var t,v=[],w,y;(t=this.Sb.$g())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.yh(v);w&&this.bg(t);y&&this.cg(t)};u.prototype.yh=function(p){var t=this.yf(p);t.Ud&&(t.Hc=this.Uc+t.Ud,this.Uc+=t.Vg,this.Vc.innerHTML=t.Hc,this.vh())};u.prototype.yf=function(p){var t=this.xc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.O){if(!/^noscript$/i.test(x.tagName)){var z=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.O.id&&"ps-style"!==x.O.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.nb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Xh:p,raw:v.join(""),Ud:w.join(""),Vg:y.join("")}};u.prototype.vh=function(){for(var p,t=[this.Vc];b(p=t.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.xc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.xc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.bg=function(p){var t=this.Sb.clear();t&&this.va.unshift(t);p.src=p.O.src||p.O.Gh;p.src&&this.kb.length?this.Fb=p:this.Rc(p);var v=this;this.xh(p,function(){v.ne(p)})};u.prototype.cg=function(p){var t=this.Sb.clear();t&&this.va.unshift(t);p.type=p.O.type||p.O.Hh||"text/css";this.zh(p);t&&this.write()};u.prototype.zh=function(p){var t=this.Af(p);this.ng(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ga.createTextNode(p.content)))};u.prototype.Af=function(p){var t=this.Ga.createElement(p.tagName);t.setAttribute("type",p.type);d(p.O,function(v,w){t.setAttribute(v,w)});return t};u.prototype.ng=function(p){this.gd('<span id="ps-style"/>');var t=this.Ga.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Rc=function(p){p.Kg=this.va;this.va=[];this.kb.unshift(p)};u.prototype.ne=function(p){p!==this.kb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.kb.shift(),this.write.apply(this,p.Kg),!this.kb.length&&this.Fb&&(this.Rc(this.Fb),this.Fb=null))};u.prototype.xh=function(p,t){var v=this.zf(p),w=this.kh(v),y=this.options.hf;p.src&&(v.src=p.src,this.ih(v,w?y:function(){t();y()}));try{this.mg(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.zf=function(p){var t=this.Ga.createElement(p.tagName);d(p.O,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.mg=function(p){this.gd('<span id="ps-script"/>');
var t=this.Ga.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.ih=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.kh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.dh&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.jf(),w.stream=u.apply(null,w),y.kf())}function u(w,y,x){function z(J){J=x.wf(J);v.write(J);x.lf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var C=w.ownerDocument,A={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.ob.onerror||a;v.ob.onerror=function(J,M,V){x.error({Qh:J+
" - "+M+":"+V});E.apply(v.ob,arguments)};v.write(y,function(){e(C,A);v.ob.onerror=E;x.done();v=null;q()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Ph?w[0]:w;var z=[w,y,x];w.Qg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.vf(z);t.push(z);v||q();return w.Qg},{streams:{},Sh:t,Ih:n})}();cc=l.postscribe}})();var D=window,F=document,dc=navigator,ec=F.currentScript&&F.currentScript.src,fc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},gc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},hc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;gc(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},ic=function(){if(ec){var a=ec.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},jc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);gc(c,b);void 0!==a&&(c.src=a);return c},kc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},lc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},mc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},nc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},oc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},pc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},qc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},rc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var uc=function(a){return sc?F.querySelectorAll(a):null},vc=function(a,b){if(!sc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},wc=!1;if(F.querySelectorAll)try{var xc=F.querySelectorAll(":root");xc&&1==xc.length&&xc[0]==F.documentElement&&(wc=!0)}catch(a){}var sc=wc;var H={na:"_ee",jc:"event_callback",Pa:"event_timeout",D:"gtag.config",T:"allow_ad_personalization_signals",kc:"restricted_data_processing",ic:"allow_google_signals",Y:"cookie_expires",Oa:"cookie_update",xa:"session_duration",da:"user_properties"};var Nc=/[A-Z]+/,Oc=/\s/,Pc=function(a){if(g(a)&&(a=Ea(a),!Oc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Nc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],m:d}}}}},Rc=function(a){for(var b={},c=0;c<a.length;++c){var d=Pc(a[c]);d&&(b[d.id]=d)}Qc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Qc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.m[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Sc={},Tc=null,Uc=Math.random();Sc.s="GTM-5WM9PV";Sc.ub="1f1";var Vc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Wc="www.googletagmanager.com/gtm.js";var Xc=Wc,Yc=null,Zc=null,$c=null,ad="//www.googletagmanager.com/a?id="+Sc.s+"&cv=237",bd={},dd={},ed=function(){var a=Tc.sequence||0;Tc.sequence=a+1;return a};var fd={},I=function(a,b){fd[a]=fd[a]||[];fd[a][b]=!0},gd=function(a){for(var b=[],c=fd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var hd=function(){return"&tc="+tb.filter(function(a){return a}).length},kd=function(){id||(id=D.setTimeout(jd,500))},jd=function(){id&&(D.clearTimeout(id),id=void 0);void 0===ld||md[ld]&&!nd&&!od||(pd[ld]||qd.sg()||0>=rd--?(I("GTM",1),pd[ld]=!0):(qd.ah(),kc(sd()),md[ld]=!0,td=ud=od=nd=""))},sd=function(){var a=ld;if(void 0===a)return"";var b=gd("GTM"),c=gd("TAGGING");return[vd,md[a]?"":"&es=1",wd[a],b?"&u="+b:"",c?"&ut="+c:"",hd(),nd,od,ud,td,"&z=0"].join("")},xd=function(){return[ad,"&v=3&t=t","&pid="+
wa(),"&rv="+Sc.ub].join("")},yd="0.005000">Math.random(),vd=xd(),zd=function(){vd=xd()},md={},nd="",od="",td="",ud="",ld=void 0,wd={},pd={},id=void 0,qd=function(a,b){var c=0,d=0;return{sg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},ah:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),rd=1E3,Ad=function(a,b){if(yd&&!pd[a]&&ld!==a){jd();ld=a;td=nd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";wd[a]="&e="+c+"&eid="+a;kd()}},Bd=function(a,b,c){if(yd&&!pd[a]&&
b){a!==ld&&(jd(),ld=a);var d,e=String(b[Hb.oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;nd=nd?nd+"."+f:"&tr="+f;kd();2022<=sd().length&&jd()}},Cd=function(a,b,c){if(yd&&!pd[a]){a!==ld&&(jd(),ld=a);var d=c+b;od=od?od+
"."+d:"&epr="+d;kd();2022<=sd().length&&jd()}};var Dd={},Ed=new xa,Fd={},Gd={},Jd={name:"dataLayer",set:function(a,b){B(La(a,b),Fd);Hd()},get:function(a){return Id(a,2)},reset:function(){Ed=new xa;Fd={};Hd()}},Id=function(a,b){if(2!=b){var c=Ed.get(a);if(yd){var d=Kd(a);c!==d&&I("GTM",5)}return c}return Kd(a)},Kd=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Md(d)},Md=function(a){for(var b=Fd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Od=function(a,b){Gd.hasOwnProperty(a)||(Ed.set(a,b),B(La(a,b),Fd),Hd())},Hd=function(a){za(Gd,function(b,c){Ed.set(b,c);B(La(b,void 0),Fd);B(La(b,c),Fd);a&&delete Gd[b]})},Pd=function(a,b,c){Dd[a]=Dd[a]||{};var d=1!==c?Kd(b):Ed.get(b);"array"===Oa(d)||"object"===Oa(d)?Dd[a][b]=B(d):Dd[a][b]=d},Qd=function(a,b){if(Dd[a])return Dd[a][b]};var Rd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Sd()||d||"http:"!=D.location.protocol?a:b)+c},Sd=function(){var a=ic(),b;if(1===a)a:{var c=Xc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ge=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),he={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ie={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},je="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var le=function(a){dd.pntr=dd.pntr||["nonGoogleScripts"];dd.snppx=dd.snppx||["nonGoogleScripts"];dd.qpx=dd.qpx||["nonGooglePixels"];var b=Id("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),he),d=Id("gtm.blacklist");d||(d=Id("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];ke()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),ie),f={};return function(h){var k=h&&h[Hb.oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];
var l=dd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,je));return f[k]=v}},ke=function(){return ge.test(D.location&&D.location.hostname)};var me={If:function(a,b){b[Hb.od]&&"string"===typeof a&&(a=1==b[Hb.od]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.qd)&&null===a&&(a=b[Hb.qd]);b.hasOwnProperty(Hb.sd)&&void 0===a&&(a=b[Hb.sd]);b.hasOwnProperty(Hb.rd)&&!0===a&&(a=b[Hb.rd]);b.hasOwnProperty(Hb.pd)&&!1===a&&(a=b[Hb.pd]);return a}};var ne={active:!0,isWhitelisted:function(){return!0}},oe=function(a){var b=Tc.zones;!b&&a&&(b=Tc.zones=a());return b};var pe=function(){};var qe=!1,re=0,se=[];function te(a){if(!qe){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){qe=!0;for(var e=0;e<se.length;e++)G(se[e])}se.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function ue(){if(!qe&&140>re){re++;try{F.documentElement.doScroll("left"),te()}catch(a){D.setTimeout(ue,50)}}}var ve=function(a){qe?a():se.push(a)};var we={},xe={},ye=function(a,b,c,d){if(!xe[a]||Vc[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=B(d,e));e.id=c;e.status="timeout";return xe[a].tags.push(e)-1},ze=function(a,b,c,d){if(xe[a]){var e=xe[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ae(a){for(var b=we[a]||[],c=0;c<b.length;c++)b[c]();we[a]={push:function(d){d(Sc.s,xe[a])}}}
var De=function(a,b,c){xe[a]={tags:[]};qa(b)&&Be(a,b);c&&D.setTimeout(function(){return Ae(a)},Number(c));return Ce(a)},Be=function(a,b){we[a]=we[a]||[];we[a].push(Ha(function(){return G(function(){b(Sc.s,xe[a])})}))};function Ce(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&Ae(a)})},rf:function(){d=!0;b>=c&&Ae(a)}}};var Ee=function(){function a(d){return!ra(d)||0>d?0:d}if(!Tc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Jd.get("gtm.start"))?Jd.get("gtm.start"):0;Tc._li={cst:a(c-b),cbt:a(Zc-b)}}};var Ie=!1,Je=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ke=!1;
var Le=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Ee();return D[b]},Me=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Je();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Oe=function(){},Ne=function(){return D.GoogleAnalyticsObject||"ga"};var Qe=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Re=/:[0-9]+$/,Se=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ve=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Te(a.protocol)||Te(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Re,"").toLowerCase());var f=b,h,k=Te(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ue(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Re,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Se(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Te=function(a){return a?a.replace(":","").toLowerCase():""},Ue=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
We=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Re,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function af(a,b,c,d){var e=tb[a],f=bf(a,b,c,d);if(!f)return null;var h=Cb(e[Hb.Gd],c,[]);if(h&&h.length){var k=h[0];f=af(k.index,{B:f,w:1===k.ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function bf(a,b,c,d){function e(){if(f[Hb.Re])k();else{var w=Db(f,c,[]),y=ye(c.id,String(f[Hb.oa]),Number(f[Hb.Id]),w[Hb.Se]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Bd(c.id,tb[a],"5");ze(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Bd(c.id,tb[a],"6");ze(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Bd(c.id,f,"1");var z=function(){var A=Fa()-C;Bd(c.id,f,"7");ze(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Bb(w,c)}catch(A){z(A)}}}var f=tb[a],h=b.B,k=b.w,l=b.terminate;if(c.Jc(f))return null;var m=Cb(f[Hb.Jd],c,[]);if(m&&m.length){var n=m[0],q=af(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.ae?l:q}if(f[Hb.Bd]||f[Hb.Ve]){var u=f[Hb.Bd]?ub:c.lh,p=h,t=k;if(!u[a]){e=Ha(e);var v=cf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function cf(a,b,c){var d=[],e=[];b[a]=df(d,e,c);return{B:function(){b[a]=ef;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=ff;for(var f=0;f<e.length;f++)e[f]()}}}function df(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ef(a){a()}function ff(a,b){b()};var jf=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.ib[d]){var e=tb[d];var f=b.add();try{var h=af(d,{B:f,w:f,terminate:f},a,d);h?c.push({ye:d,te:Eb(e),Uf:h}):(gf(d,a),f())}catch(l){f()}}b.rf();c.sort(hf);for(var k=0;k<c.length;k++)c[k].Uf();return 0<c.length};function hf(a,b){var c,d=b.te,e=a.te;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.ye,k=b.ye;f=h>k?1:h<k?-1:0}return f}
function gf(a,b){if(!yd)return;var c=function(d){var e=b.Jc(tb[d])?"3":"4",f=Cb(tb[d][Hb.Gd],b,[]);f&&f.length&&c(f[0].index);Bd(b.id,tb[d],e);var h=Cb(tb[d][Hb.Jd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var kf=!1,lf=function(a,b,c,d,e){if("gtm.js"==b){if(kf)return!1;kf=!0}Ad(a,b);var f=De(a,d,e);Pd(a,"event",1);Pd(a,"ecommerce",1);Pd(a,"gtm");var h={id:a,name:b,Jc:le(c),ib:[],lh:[],ke:function(){I("GTM",6)}};h.ib=Lb(h);var k=jf(h,f);
if(!k)return k;for(var l=0;l<h.ib.length;l++)if(h.ib[l]){var m=tb[l];if(m&&!Vc[String(m[Hb.oa])])return!0}return!1};var nf=/^https?:\/\/www\.googletagmanager\.com/;function of(){var a;return a}function qf(a,b){}
function pf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function rf(){var a=!1;return a};var sf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},tf=function(a){var b=new sf;b.eventModel=a;return b},uf=function(a,b){a.targetConfig=b;return a},vf=function(a,b){a.containerConfig=b;return a},wf=function(a,b){a.h=b;return a},xf=function(a,b){a.globalConfig=b;return a},yf=function(a,b){a.B=b;return a},zf=function(a,b){a.w=b;return a};
sf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Af=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Bf={},Cf=["G"];Bf.ze="";var Df=Bf.ze.split(",");function Ef(){var a=Tc;return a.gcq=a.gcq||new Ff}
var Gf=function(a,b,c){Ef().register(a,b,c)},Hf=function(a,b,c,d){Ef().push("event",[b,a],c,d)},If=function(a,b){Ef().push("config",[a],b)},Jf={},Kf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Lf=function(a,b,c,d,e){this.type=a;this.o=b;this.N=c||"";this.h=d;this.i=e},Ff=function(){this.i={};this.o={};this.h=[]},Mf=function(a,b){var c=Pc(b);return a.i[c.containerId]=a.i[c.containerId]||new Kf},Nf=function(a,b,c,d){if(d.N){var e=Mf(a,d.N),
f=e.o;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.o),q=Id("gtm.uniqueEventId"),u=Pc(d.N).prefix,p=zf(yf(xf(wf(vf(uf(tf(h),k),l),m),n),function(){Cd(q,u,"2");}),function(){Cd(q,u,"3");});try{Cd(q,u,"1");3===f.length?f(b,d.o,p):4===f.length&&f(d.N,b,d.o,
p)}catch(t){Cd(q,u,"4");}}}};
Ff.prototype.register=function(a,b,c){if(3!==Mf(this,a).status){Mf(this,a).o=b;Mf(this,a).status=3;c&&(Mf(this,a).i=c);var d=Pc(a),e=Jf[d.containerId];if(void 0!==e){var f=Tc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Tc[d.containerId]._spx&&(h=h.toLowerCase());var k=Id("gtm.uniqueEventId"),l=h,m=Fa()-f;if(yd&&!pd[k]){k!==ld&&(jd(),ld=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);ud=ud?ud+","+n:"&cl="+n}delete Jf[d.containerId]}this.flush()}};
Ff.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Pc(c),h;if(h=f){var k;if(k=1===Mf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Mf(this,c).status=2,this.push("require",[],f.containerId),Jf[f.containerId]=Fa(),!Rd())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";hc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Lf(a,e,c,b,d));d||this.flush()};
Ff.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Mf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.o)});break;case "config":var d=c.h[0],e=!!d[H.Nb];delete d[H.Nb];var f=Mf(this,c.N),h=Pc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Nf(this,H.D,d,c);f.h=!0;delete d[H.na];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Nf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Of=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Rf=function(a,b,c,d){var e=Pf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Qf(e,function(f){return f.Gb},b);if(1===e.length)return e[0].id;e=Qf(e,function(f){return f.jb},c);return e[0]?e[0].id:void 0}};
function Sf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Of(b,e).indexOf(c)}
var Wf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Tf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Vf(y,u)&&Sf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Vf(q,u)&&Sf(m,a,l)}return k};function Qf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Pf(a,b){for(var c=[],d=Of(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Gb:1*k[0]||1,jb:1*k[1]||1}))}}return c}
var Xf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Yf=/(^|\.)doubleclick\.net$/i,Vf=function(a,b){return Yf.test(document.location.hostname)||"/"===b&&Xf.test(a)},Tf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Yf.test(e)||Xf.test(e)||a.push("none");return a};var Zf="".split(/,/),$f=!1;var ag=null,bg={},cg={},dg;function eg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.jc]&&(c.eventCallback=b[H.jc]),b[H.Pa]&&(c.eventTimeout=b[H.Pa]));return c}
var kg={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=eg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Qa(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&
(b={},Qa(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lg={policy:!0};var mg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},og=function(a){var b=ng(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pg=!1,qg=[];function rg(){if(!pg){pg=!0;for(var a=0;a<qg.length;a++)G(qg[a])}}var sg=function(a){pg?G(a):qg.push(a)};var Hg=function(a){if(Gg(a))return a;this.h=a};Hg.prototype.ag=function(){return this.h};var Gg=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};Hg.prototype.getUntrustedUpdateValue=Hg.prototype.ag;var Ig=[],Jg=!1,Kg=function(a){return D["dataLayer"].push(a)},Lg=function(a){var b=Tc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Od(f,void 0),Od(f,h))});Yc||(Yc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=ed(),a["gtm.uniqueEventId"]=d,Od("gtm.uniqueEventId",d));$c=c;var e=
Ng(a);$c=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Ng(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Tc.zones;d=e?e.checkState(Sc.s,c):ne;return d.active?lf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Og(){for(var a=!1;!Jg&&0<Ig.length;){Jg=!0;delete Fd.eventModel;Hd();var b=Ig.shift();if(null!=b){var c=Gg(b);if(c){var d=b;b=Gg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Id(h,1);if(ua(k)||Qa(k))k=B(k);Gd[h]=k}}try{if(qa(b))try{b.call(Jd)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Id(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=kg[b[0]];if(t&&(!c||!lg[b[0]])){b=t(b);break a}}b=void 0}if(!b){Jg=!1;continue}}a=Mg(b)||a}}finally{c&&Hd(!0)}}Jg=!1}
return!a}function Pg(){var a=Og();try{mg(D["dataLayer"],Sc.s)}catch(b){}return a}
var Rg=function(){var a=fc("dataLayer",[]),b=fc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ve(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});sg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Tc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Hg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ig.push.apply(Ig,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Og()&&h};Ig.push.apply(Ig,a.slice(0));Qg()&&G(Pg)},Qg=function(){var a=!0;return a};var Sg={};Sg.qb=new String("undefined");
var Tg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sg.qb?b:a[d]);return c.join("")}};Tg.prototype.toString=function(){return this.h("undefined")};Tg.prototype.valueOf=Tg.prototype.toString;Sg.$e=Tg;Sg.vc={};Sg.Lf=function(a){return new Tg(a)};var Ug={};Sg.bh=function(a,b){var c=ed();Ug[c]=[a,b];return c};Sg.Xd=function(a){var b=a?0:1;return function(c){var d=Ug[c];if(d&&"function"===typeof d[b])d[b]();Ug[c]=void 0}};Sg.qg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sg.Rg=function(a){if(a===Sg.qb)return a;var b=ed();Sg.vc[b]=a;return'google_tag_manager["'+Sc.s+'"].macro('+b+")"};Sg.Dg=function(a,b,c){a instanceof Sg.$e&&(a=a.h(Sg.bh(b,c)),b=pa);return{Hc:a,B:b}};var Vg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||nc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wg=function(a){Tc.hasOwnProperty("autoEventsSettings")||(Tc.autoEventsSettings={});var b=Tc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xg=function(a,b,c){Wg(a)[b]=c},Yg=function(a,b,c,d){var e=Wg(a),f=Ga(e,b,d);e[b]=c(f)},Zg=function(a,b,c){var d=Wg(a);return Ga(d,b,c)};var $g=function(){for(var a=dc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},ch=function(a,b,c,d){var e=ah(b);return Rf(a,e,bh(c),d)},dh=function(a,b,c,d){var e=""+ah(c),f=bh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ah=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},bh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var eh=["1"],fh={},jh=function(a,b,c,d){var e=gh(a);fh[e]||hh(e,b,c)||(ih(e,$g(),b,c,d),hh(e,b,c))};function ih(a,b,c,d,e){var f=dh(b,"1",d,c);Wf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function hh(a,b,c){var d=ch(a,b,c,eh);d&&(fh[a]=d);return d}function gh(a){return(a||"_gcl")+"_au"};var kh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({bd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].bd]||(f[a[h].bd]=[]),f[a[h].bd].push({timestamp:k[1],Xf:k[2]}))}return f};function lh(){for(var a=mh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function nh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var mh,oh;function ph(a){mh=mh||nh();oh=oh||lh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(mh[l],mh[m],mh[n],mh[q])}return b.join("")}
function qh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=oh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}mh=mh||nh();oh=oh||lh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var rh;function sh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var wh=function(){var a=th,b=uh,c=vh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){lc(F,"mousedown",d);lc(F,"keyup",d);lc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},vh=function(){var a=fc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var xh=/(.*?)\*(.*?)\*(.*)/,yh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,zh=/^(?:www\.|m\.|amp\.)+/,Ah=/([^?#]+)(\?[^#]*)?(#.*)?/,Bh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Dh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ph(String(d))))}var e=b.join("*");return["1",Ch(e),e].join("*")},Ch=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=rh)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}rh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^rh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Fh=function(){return function(a){var b=We(D.location.href),c=b.search.replace("?",""),d=Se(c,"_gl",!0)||"";a.query=Eh(d)||{};var e=Ve(b,"fragment").match(Bh);a.fragment=Eh(e&&e[3]||
"")||{}}},Gh=function(){var a=Fh(),b=vh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Eh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=xh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Ch(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=qh(u[p+1]);return q}}}}catch(t){}};
function Hh(a,b,c){function d(m){var n=m,q=Bh.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Ah.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Ih(a,b,c){for(var d={},e={},f=vh().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&sh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=Dh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Hh(l,a.action);Qe.test(v)&&(a.action=v)}}}else Jh(l,a,!1)}if(!c&&Ja(e)){var w=Dh(e);Jh(w,a,!0)}}function Jh(a,b,c){if(b.href){var d=Hh(a,b.href,void 0===c?!1:c);Qe.test(d)&&(b.href=d)}}
var th=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ih(e,e.hostname,!1)}}catch(h){}},uh=function(a){try{if(a.action){var b=Ve(We(a.action),"host");Ih(a,b,!0)}}catch(c){}},Kh=function(a,b,c,d){wh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};vh().decorators.push(e)},Lh=function(){var a=F.location.hostname,b=yh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(zh,""),l=e.replace(zh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Mh=function(a,b){return!1===a?!1:a||b||Lh()};var Nh={};var Oh=/^\w+$/,Ph=/^[\w-]+$/,Qh=/^~?[\w-]+$/,Rh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Sh(a){return a&&"string"==typeof a&&a.match(Oh)?a:"_gcl"}var Uh=function(){var a=We(D.location.href),b=Ve(a,"query",!1,void 0,"gclid"),c=Ve(a,"query",!1,void 0,"gclsrc"),d=Ve(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Se(e,"gclid",void 0);c=c||Se(e,"gclsrc",void 0)}return Th(b,c,d)};
function Th(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(Ph))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Nh.gtm_3pds?0:Nh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Wh=function(a){var b=Uh();Vh(b,a)};
function Vh(a,b,c){function d(q,u){var p=Xh(q,e);p&&Wf(p,u,h,f,l,!0)}b=b||{};var e=Sh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Yh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Zh=function(a,b,c,d,e){for(var f=Gh(),h=Sh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Rh[l]){var m=Xh(l,h),n=f[m];if(n){var q=Math.min(Yh(n),Fa()),u;b:{for(var p=q,t=Of(m,F.cookie),v=0;v<t.length;++v)if(Yh(t[v])>p){u=!0;break b}u=!1}u||Wf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Vh(Th(f.gclid,f.gclsrc),w)},Xh=function(a,b){var c=Rh[a];if(void 0!==c)return b+c},Yh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function $h(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ai=function(a,b,c,d,e){if(ua(b)){var f=Sh(e);Kh(function(){for(var h={},k=0;k<a.length;++k){var l=Xh(a[k],f);if(l){var m=Of(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},bi=function(a){return a.filter(function(b){return Qh.test(b)})},ci=function(a,b){for(var c=Sh(b&&b.prefix),d={},e=0;e<a.length;e++)Rh[a[e]]&&(d[a[e]]=Rh[a[e]]);za(d,function(f,h){var k=Of(c+h,F.cookie);if(k.length){var l=k[0],m=Yh(l),n={};n[f]=[$h(l)];Vh(n,b,m)}})};var di=/^\d+\.fls\.doubleclick\.net$/;function ei(a){var b=We(D.location.href),c=Ve(b,"host",!1);if(c&&c.match(di)){var d=Ve(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function fi(a,b){if("aw"==a||"dc"==a){var c=ei("gcl"+a);if(c)return c.split(".")}var d=Sh(b);if("_gcl"==d){var e;e=Uh()[a]||[];if(0<e.length)return e}var f=Xh(a,d),h;if(f){var k=[];if(F.cookie){var l=Of(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=$h(l[m]);n&&-1===r(k,n)&&k.push(n)}h=bi(k)}else h=k}else h=k}else h=[];return h}
var gi=function(){var a=ei("gac");if(a)return decodeURIComponent(a);var b=kh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].Xf);f=bi(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},hi=function(a,b,c,d,e){jh(b,c,d,e);var f=fh[gh(b)],h=Uh().dc||[],k=!1;if(f&&0<h.length){var l=Tc.joined_au=Tc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+f;dc.sendBeacon&&dc.sendBeacon(u)||kc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=gh(b),t=fh[p];t&&ih(p,t,c,d,e)}};var ii;if(3===Sc.ub.length)ii="g";else{var ji="G";ii=ji}
var ki={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ii,OPT:"o"},li=function(a){var b=Sc.s.split("-"),c=b[0].toUpperCase(),d=ki[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Sc.ub.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Sc.ub+e};
var mi=function(a){return!(void 0===a||null===a||0===(a+"").length)},ni=function(a,b){var c;if(2===b.V)return a("ord",wa(1E11,1E13)),!0;if(3===b.V)return a("ord","1"),a("num",wa(1E11,1E13)),!0;if(4===b.V)return mi(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.V)c="1";else if(6===b.V)c=b.Wc;else return!1;mi(c)&&a("qty",c);mi(b.Db)&&a("cost",b.Db);mi(b.transactionId)&&a("ord",b.transactionId);return!0},oi=encodeURIComponent,pi=function(a,b){function c(n,q,u){f.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:oi(q)))}var d=a.Cc,e=a.protocol;e+=a.Wb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+oi(d)+(";type="+oi(a.Fc))+(";cat="+oi(a.cb));var f=a.Nf||{};za(f,function(n,q){e+=";"+oi(n)+"="+oi(q+"")});if(ni(c,a)){mi(a.bc)&&c("u",a.bc);mi(a.ac)&&c("tran",a.ac);c("gtm",li());!1===a.nf&&c("npa","1");if(a.Bc){var h=fi("dc",a.Ea);h&&h.length&&c("gcldc",h.join("."));var k=fi("aw",a.Ea);k&&k.length&&c("gclaw",k.join("."));var l=gi();l&&c("gac",l);jh(a.Ea,void 0,a.Jf,a.Kf);
var m=fh[gh(a.Ea)];m&&c("auiddc",m)}mi(a.Sc)&&c("prd",a.Sc,!0);za(a.dd,function(n,q){c(n,q)});e+=b||"";mi(a.Rb)&&c("~oref",a.Rb);a.Wb?jc(e+"?",a.B):kc(e+"?",a.B,a.w)}else G(a.w)};var qi=["input","select","textarea"],ri=["button","hidden","image","reset","submit"],si=function(a){var b=a.tagName.toLowerCase();return!va(qi,function(c){return c===b})||"input"===b&&va(ri,function(c){return c===a.type.toLowerCase()})?!1:!0},ti=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):qc(a,["form"],100)},ui=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(si(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var xi=!!D.MutationObserver,yi=void 0,zi=function(a){if(!yi){var b=function(){var c=F.body;if(c)if(xi)(new MutationObserver(function(){for(var e=0;e<yi.length;e++)G(yi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;lc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<yi.length;e++)G(yi[e])}))})}};yi=[];F.body?b():G(b)}yi.push(a)};var Vi=D.clearTimeout,Wi=D.setTimeout,R=function(a,b,c){if(Rd()){b&&G(b)}else return hc(a,b,c)},Xi=function(){return D.location.href},Yi=function(a){return Ve(We(a),"fragment")},Zi=function(a){return Ue(We(a))},S=function(a,b){return Id(a,b||2)},$i=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kg(a)):d=Kg(a);return d},aj=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},bj=function(a,b,c){return Of(a,b,void 0===c?!0:!!c)},cj=function(a,b){if(Rd()){b&&G(b)}else jc(a,b)},dj=function(a){return!!Zg(a,"init",!1)},ej=function(a){Xg(a,"init",!0)},fj=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Xc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},gj=function(a,b){var c=a[b];return c};
var hj=Sg.Dg;var ij;var Fj=new xa;function Gj(a,b){function c(h){var k=We(h),l=Ve(k,"protocol"),m=Ve(k,"host",!0),n=Ve(k,"port"),q=Ve(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Hj(a){return Ij(a)?1:0}
function Ij(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Hj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Fj.get(p);t||(t=new RegExp(c,u),Fj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Gj(b,
c)}return!1};var Jj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Kj={},Lj=encodeURI,Y=encodeURIComponent,Mj=kc;var Nj=function(a,b){if(!a)return!1;var c=Ve(We(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Oj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Kj.rg=function(){var a=!1;return a};var al=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var ll=window,ml=document,nl=function(a){var b=ll._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ll["ga-disable-"+a])return!0;try{var c=ll.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Of("AMP_TOKEN",ml.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ml.getElementById("__gaOptOutExtension")?!0:!1};var ql=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.da]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ul=function(a,b,c){Hf(b,c,a)},vl=function(a,b,c){Hf(b,c,a,!0)},xl=function(a,b){};
function wl(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;pi(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Oj(b.vtp_customVariable||[],"key","value")||{},e={cb:b.vtp_activityTag,Bc:c,Ea:b.vtp_conversionCookiePrefix||void 0,Db:void 0,V:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Cc:b.vtp_advertiserId,Fc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,
Rb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Wc:void 0,Wb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,ac:b.vtp_transactionVariable,transactionId:void 0,bc:b.vtp_userVariable,dd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([Oj(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Qd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=S("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ve(We(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Zi(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vg(c,"gtm.click");$i(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!dj("cl")){var c=X("document");lc(c,"click",a,!0);ej("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return bj(a.vtp_name,S("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;pi(b,c)}(function(b){Z.__fls=b;Z.__fls.b="fls";Z.__fls.g=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(q){q=q||[];for(var u=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],t=0;t<q.length;t++)for(var v=0;v<p.length;v++){var w=p[v],y=q[t][w[1]];void 0!==y&&u.push(w[0]+
(t+1)+":"+Y(y))}return u.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(S("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var h=e[f].split(":");h[1]=h[1]&&Y(h[1])||"";e[f]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Oj(b.vtp_customVariable||
[],"key","value")||{},m={cb:b.vtp_activityTag,Bc:k,Ea:b.vtp_conversionCookiePrefix||void 0,Db:b.vtp_revenue,V:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Cc:b.vtp_advertiserId,Fc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,Rb:b.vtp_useImageTag?void 0:b.vtp_url,Sc:c,protocol:"",Wc:b.vtp_quantity,Wb:!b.vtp_useImageTag,ac:b.vtp_transactionVariable,transactionId:b.vtp_orderId,bc:b.vtp_userVariable,dd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,X("google_attr").build([Oj(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=S("gtm.url",1);c=c||Xi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Zi(String(c));var e=We(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ve(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ve(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=S(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Oj(n.vtp_fieldsToSet,"fieldName","value"),f);B(Oj(n.vtp_contentGroup,"index","group"),h);B(Oj(n.vtp_dimension,"index","dimension"),k);B(Oj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=B(n);d=B(d,q)}B(Oj(d.vtp_fieldsToSet,"fieldName","value"),f);B(Oj(d.vtp_contentGroup,
"index","group"),h);B(Oj(d.vtp_dimension,"index","dimension"),k);B(Oj(d.vtp_metric,"index","metric"),l);var u=Le(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+ed(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},C=function(){},A=function(O,K,sa){var Fb=0;if(O)for(var Ca in O)if(O.hasOwnProperty(Ca)&&(sa&&v[Ca]||!sa&&void 0===v[Ca])){var Za=w[Ca]?Ba(O[Ca]):O[Ca];"anonymizeIp"!=Ca||Za||(Za=void 0);K[Ca]=Za;Fb++}return Fb},E={name:t};A(f,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",li(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){
y("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var T=function(O){return S("transaction"+O,1)},na=T("Id");y("ecommerce:addTransaction",{id:na,affiliation:T("Affiliation"),revenue:T("Total"),shipping:T("Shipping"),tax:T("Tax")});for(var ha=T("Products")||[],N=0;N<ha.length;N++){var L=ha[N];y("ecommerce:addItem",{id:na,sku:L.sku,name:L.name,category:L.category,price:L.price,quantity:L.quantity})}y("ecommerce:send");}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ta,f&&f.forceSSL);R(ab,function(){var O=Je();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;B(Oj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=B(e);c=B(c,f)||{}}B(Oj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Le(c.vtp_functionName);if(qa(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+ed(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,z){var C=0,A;for(A in y)if(y.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?Ba(y[A]):y[A];"anonymizeIp"!==A||E||(E=void 0);x[A]=E;C++}return C},u={name:l};q(d,u,!0);var p={"&gtm":li(!0)};q(d,p,!1);var t=encodeURI(Q("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,R(t,function(){return Je().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=X("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();

Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;aj("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});aj("_hjSettings",{hjid:b,hjsv:5});R("//static.hotjar.com/c/hotjar-"+Y(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Lh())){Zh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Wh(m);ci(["aw","dc"],m);hi(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;ai(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Qd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Xi());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Nj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ve(We(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return nc(p,"value");case "button":return oc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)si(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&nc(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,oc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=We(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ve(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&nc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Gi);return V&&W?Ji(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[Hb.oa]=null;c[Hb.Le]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Ee();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:li()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?S(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==v?S(x):k[y];z(C)&&q(w,C)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,R(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,R(Q("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){G(a.vtp_gtmOnFailure)}})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();





Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,gc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var b=function(d,e,f){ve(function(){var h,k=Tc;k.postscribe||(k.postscribe=cc);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(f)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=hj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Hc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,pc(h),k,e)()}else Wi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();




Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=pc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Mj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var e=X("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.pg||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=qc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Zg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Zg("lcl","nv.ids",[]):Zg("lcl","ids",[]);if(q.length){var u=Vg(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(gj(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X((gj(l,"target")||"_self").substring(1)),w=!0;if($i(u,Lg(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.pg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=gj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else $i(u,function(){},n||2E3);return!0}}};lc(e,"click",h,!1);lc(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=gj(f,"href"),l=k.indexOf("#"),m=gj(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Zi(k),q=Zi(h.location);return n!==q}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,
q)};Yg("lcl","mwt",m,0);h||Yg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Yg("lcl","ids",n,[]);h||Yg("lcl","nv.ids",n,[]);dj("lcl")||(a(),ej("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var sm={};sm.macro=function(a){if(Sg.vc.hasOwnProperty(a))return Sg.vc[a]},sm.onHtmlSuccess=Sg.Xd(!0),sm.onHtmlFailure=Sg.Xd(!1);sm.dataLayer=Jd;sm.callback=function(a){bd.hasOwnProperty(a)&&qa(bd[a])&&bd[a]();delete bd[a]};function tm(){Tc[Sc.s]=sm;Ia(dd,Z.a);yb=yb||Sg;zb=me}
function um(){Nh.gtm_3pds=!0;Tc=D.google_tag_manager=D.google_tag_manager||{};if(Tc[Sc.s]){var a=Tc.zones;a&&a.unregisterChild(Sc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)qb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)tb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);rb.push(q)}wb=Z;xb=Hj;tm();Rg();qe=!1;re=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)te();else{lc(F,"DOMContentLoaded",te);lc(F,"readystatechange",te);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&ue()}lc(D,"load",te)}pg=!1;"complete"===F.readyState?rg():lc(D,
"load",rg);a:{if(!yd)break a;D.setInterval(zd,864E5);}
Zc=(new Date).getTime();
}}um();

})()
