!function(){var e=wp.element.createElement,o=wp.blocks.registerBlockType,n=(source=wp.blocks.source,wp.i18n.__),i=e("img",{src:__BOOKINGPRESSIMAGEURL+"/bookingpress_menu_icon.png"});o("bookingpress/bookingpress-my-booking",{title:n("Customer Panel - BookingPress Appointment Plugin"),icon:i,category:"bookingpress",keywords:[n("appointment"),n("bookingpress"),n("booking"),n("booking calendar"),n("booking system"),n("scheduling"),n("reservation")],attributes:{short_code:{type:"string",default:"[bookingpress_my_appointments]"}},edit:function(o){if("bookingpress/bookingpress-my-booking"==o.name)return e("div",{},o.attributes.short_code)},save:function(o){return e("div",{},o.attributes.short_code)}})}((window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element,window.wp.editor));