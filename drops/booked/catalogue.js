export const sources = {
  "S1": {
    "title": "Airport detention report",
    "date": "2026-10-13",
    "url": "https://indianexpress.com/article/cities/delhi/delhi-police-cockroach-janta-party-leaders-abhijeet-dipke-saurabh-das-ashutosh-ranka-flight-jantar-mantar-protest-10917903/",
    "scope": "Police entered the aircraft; separate police facilities; electronic devices surrendered. Does not establish imprisonment or lathi use."
  },
  "S2": {
    "title": "Delhi protest detention report",
    "date": "2026-10-11",
    "url": "https://indianexpress.com/article/cities/delhi/cjp-protest-opposition-leaders-detained-abhijeet-dipke-police-crackdown-10915627/lite/",
    "scope": "Protesters and others taken from streets to detention centres. Does not establish lathi use."
  }
};

export const properties = [
  {
    "id": "arrival-suite",
    "slug": "arrival-suite",
    "name": "The Arrival Suite",
    "area": "Aerocity",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 16,
    "distanceLabel": "fiction",
    "score": 9.6,
    "scoreWord": "Unforgettable",
    "padlocks": 4,
    "roomType": "Single Occupancy (Escorted) · 1 plinth bed",
    "filters": [
      "airport",
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "Someone on your flight just got this room.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Free pickup from airport",
        "lead": true,
        "group": "Facilities",
        "label": "event",
        "source": "S1"
      },
      {
        "text": "Escorted arrival",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Single occupancy",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Skip the taxi queue. Our team meets you at the aircraft door, before you've unbuckled, and handles everything from there. Bags, phone, plans: we take it all off your hands.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Pickup is complimentary and non-optional. Window seat passengers may be collected first.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Hadn't even switched off airplane mode.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Didn't book. Got picked up anyway. 10/10 initiative from staff.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "Staff were waiting at the gate with my name. I never gave them my name.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/arrival-suite-hero.png",
        "alt": "A warm cream-and-green cell with a neatly made bed and barred entrance.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/arrival-suite-detail.png",
        "alt": "Close-up of the folded blanket and bedside amenities in the Arrival Suite.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-october-detentions.webp",
        "alt": "Police and security personnel surround a protester lying on a Delhi street during detention.",
        "label": "Protest photo",
        "credit": "AP / Manish Swarup · Outlook",
        "sourceUrl": "https://www.outlookindia.com/national/in-photos-police-detain-protesters-in-delhi-during-demonstration-seeking-cecs-resignation",
        "capturedOn": "2026-10-10",
        "caption": "Police detain a protester in Delhi.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "stayOrder": 1
  },
  {
    "id": "jantar-social",
    "slug": "jantar-social",
    "name": "The Jantar Social",
    "area": "Connaught Place",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 2,
    "distanceLabel": "fiction",
    "score": 9.1,
    "scoreWord": "Very secure",
    "padlocks": 3,
    "roomType": "Shared Dormitory · sleeps \"as many as necessary\"",
    "filters": [
      "shared",
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "14 people from your WhatsApp group are already here.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Group transfers included",
        "lead": true,
        "group": "Facilities",
        "label": "event",
        "source": "S2"
      },
      {
        "text": "Shared accommodation",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Meet like-minded guests",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Perfect for friends who travel together, or who were standing together. Arrive as a group in our complimentary bus and enjoy a lively, sociable stay with guests who share your views. All of them.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Group bookings are made on your behalf. Placards are stored at reception.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Came with friends. Left with friends. Eventually.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Great for networking. Everyone had read the same thread.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "Bus was free and very punctual. It arrived before the speeches ended.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/jantar-social-hero.png",
        "alt": "A sunlit shared cell with rolled durries, metal cups and a wide barred entrance.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/jantar-social-detail.png",
        "alt": "Close-up of rolled bedding and tea cups in the Jantar Social.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-october-detentions.webp",
        "alt": "Police and security personnel surround a protester lying on a Delhi street during detention.",
        "label": "Protest photo",
        "credit": "AP / Manish Swarup · Outlook",
        "sourceUrl": "https://www.outlookindia.com/national/in-photos-police-detain-protesters-in-delhi-during-demonstration-seeking-cecs-resignation",
        "capturedOn": "2026-10-10",
        "caption": "Police detain a protester in Delhi.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "stayOrder": 2
  },
  {
    "id": "unplugged-residency",
    "slug": "unplugged-residency",
    "name": "The Unplugged Residency",
    "area": "Lutyens’ Delhi",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 5,
    "distanceLabel": "fiction",
    "score": 9.3,
    "scoreWord": "Thorough",
    "padlocks": 4,
    "roomType": "Silent Single · 1 bed · 0 sockets",
    "filters": [
      "digital",
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "Your last post made you eligible for this room.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Complimentary digital detox",
        "lead": true,
        "group": "Facilities",
        "label": "event",
        "source": "S1"
      },
      {
        "text": "Device storage at reception",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "No Wi-Fi, no distractions",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Finally switch off. Hand your phone to our front desk on arrival and rediscover the lost art of staring at a wall. Notifications resume at management's discretion.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Devices are returned in the condition we decide. Passwords not required, but appreciated.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Finally off my phone. Not my choice, but still.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Host was extremely responsive, especially to my tweets.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "Peaceful. Couldn't tell anyone where I was, which I think was the point.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/unplugged-residency-hero.png",
        "alt": "A quiet cell with a steel desk, stool and simple plinth bed.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/unplugged-residency-detail.png",
        "alt": "Close-up of the desk and empty charging cable in the Unplugged Residency.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-october-police-response.webp",
        "alt": "A Delhi police officer reaches toward demonstrators beside street railings.",
        "label": "Protest photo",
        "credit": "PTI / Karma Bhutia · Outlook",
        "sourceUrl": "https://www.outlookindia.com/national/in-photos-police-detain-protesters-in-delhi-during-demonstration-seeking-cecs-resignation",
        "capturedOn": "2026-10-10",
        "caption": "Police push back demonstrators in Delhi.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "stayOrder": 3
  },
  {
    "id": "wellness-wing",
    "slug": "wellness-wing",
    "name": "The Wellness Wing",
    "area": "Civil Lines",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 7,
    "distanceLabel": "fiction",
    "score": 8.9,
    "scoreWord": "Mandatory",
    "padlocks": 4,
    "roomType": "Recovery Room · 1 bed · pillow on request (request not taken)",
    "filters": [
      "wellness",
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "Therapists are already on their way.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Complimentary lathi massage",
        "lead": true,
        "group": "Wellness",
        "label": "fiction"
      },
      {
        "text": "Deep-tissue, firm pressure",
        "lead": false,
        "group": "Wellness",
        "label": "fiction"
      },
      {
        "text": "Treatments on arrival",
        "lead": false,
        "group": "Wellness",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Unwind the Delhi way. Our uniformed therapists specialise in a traditional, full-body bamboo technique. No appointment, no consultation, no need to ask. Ideal for guests who've been standing in one place for too long.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Pressure cannot be adjusted. Feedback forms are not available.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Very firm. Couldn't choose my therapist.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Did not request this treatment. Received it anyway. Thorough.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "I came for the protest, stayed for the posture correction.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/wellness-wing-hero.png",
        "alt": "A sunlit cream-and-green cell with a towel, bamboo stick and brass bowl arranged on a central plinth.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/wellness-wing-detail.png",
        "alt": "Close-up of the Wellness Wing towel, bamboo stick, brass bowl and neem leaves.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-july-lathi-charge.jpg",
        "alt": "Delhi police wield lathis as protesters scatter; a man lies on the road.",
        "label": "Archive photo",
        "credit": "Praveen Khanna / The Indian Express",
        "sourceUrl": "https://indianexpress.com/article/cities/delhi/sonam-wangchuk-hunger-strike-cjp-protest-delhi-police-crackdown-sansad-chalo-march-10795715/",
        "capturedOn": "2026-07-20",
        "caption": "Police disperse protesters near Parliament Street during an earlier Delhi protest.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "wellnessMenu": [
      {
        "name": "Signature Lathi Massage",
        "duration": "Until complete",
        "price": "Complimentary",
        "label": "fiction"
      },
      {
        "name": "Crowd-Release Therapy",
        "duration": "Until complete",
        "price": "Complimentary",
        "label": "fiction"
      },
      {
        "name": "Shoulder Realignment (Group)",
        "duration": "Until complete",
        "price": "Complimentary",
        "label": "fiction"
      },
      {
        "name": "Water Cannon Hydrotherapy (seasonal)",
        "duration": "Until complete",
        "price": "Complimentary",
        "label": "fiction"
      }
    ],
    "stayOrder": 4
  },
  {
    "id": "courtyard-view",
    "slug": "courtyard-view",
    "name": "The Courtyard View",
    "area": "Vasant Kunj",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 15,
    "distanceLabel": "fiction",
    "score": 8.7,
    "scoreWord": "Well guarded",
    "padlocks": 3,
    "roomType": "Double with Yard Access · 2 plinth beds",
    "filters": [
      "courtyard",
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "Outdoor slots fill fast. All 20 minutes of them.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Courtyard access",
        "lead": true,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Fresh air during approved hours",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Garden view (partial)",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Wake to birdsong over high walls. Step into our private enclosed courtyard for fresh air at carefully selected times, under the watchful eye of our attentive team.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Courtyard opening hours are set daily and shared with you after they have passed.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Saw the sky. Lovely sky. Would like to see more of it.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Staff were very attentive. Never let me out of their sight.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "Beautiful light at 4pm. I was told it was 4pm.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/courtyard-view-hero.png",
        "alt": "A warm cell with two plinth beds and a barred door opening toward a tree-filled courtyard.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/courtyard-view-detail.png",
        "alt": "Close-up of the Courtyard View bed and brass bucket beside the courtyard entrance.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-october-police-response.webp",
        "alt": "A Delhi police officer reaches toward demonstrators beside street railings.",
        "label": "Protest photo",
        "credit": "PTI / Karma Bhutia · Outlook",
        "sourceUrl": "https://www.outlookindia.com/national/in-photos-police-detain-protesters-in-delhi-during-demonstration-seeking-cecs-resignation",
        "capturedOn": "2026-10-10",
        "caption": "Police push back demonstrators in Delhi.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "stayOrder": 5
  },
  {
    "id": "extended-stay",
    "slug": "extended-stay",
    "name": "The Extended Stay",
    "area": "Outer Delhi",
    "areaNote": "Location withheld",
    "distanceJantarMantar": 24,
    "distanceLabel": "fiction",
    "score": 9.8,
    "scoreWord": "Inescapable",
    "padlocks": 5,
    "roomType": "Long-Stay Single · 1 bed · monthly rates available, monthly is the minimum",
    "filters": [
      "breakfast",
      "frontdesk",
      "meals"
    ],
    "nudge": {
      "text": "Guests usually stay longer than planned.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Full board, three meals daily",
        "lead": true,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Flexible duration",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Long-stay discount (stay applies)",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "Settle in. Three hot meals a day, served on time and without the burden of choice. Our flexible-duration policy means your stay grows with you, and flexibility is handled entirely by management.",
      "label": "fiction"
    },
    "finePrint": [
      {
        "text": "Check-out dates are set at a later date. Extensions are complimentary and automatic.",
        "label": "fiction"
      }
    ],
    "reviews": [
      {
        "text": "Booked for a night. Into week three. Food's consistent.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction"
      },
      {
        "text": "Zero restaurant decisions. Zero decisions in general.",
        "guest": "Group stay · arranged",
        "label": "fiction"
      },
      {
        "text": "Would not stay again. Was not asked.",
        "guest": "City break · extended",
        "label": "fiction"
      }
    ],
    "images": [
      {
        "src": "./assets/extended-stay-hero.png",
        "alt": "A cream-and-blue cell with a made bed, meal tray and caged ceiling fan.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/extended-stay-detail.png",
        "alt": "Close-up of the meal tray and folded blankets in the Extended Stay.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility."
      },
      {
        "src": "./assets/editorial/delhi-october-detentions.webp",
        "alt": "Police and security personnel surround a protester lying on a Delhi street during detention.",
        "label": "Protest photo",
        "credit": "AP / Manish Swarup · Outlook",
        "sourceUrl": "https://www.outlookindia.com/national/in-photos-police-detain-protesters-in-delhi-during-demonstration-seeking-cecs-resignation",
        "capturedOn": "2026-10-10",
        "caption": "Police detain a protester in Delhi.",
        "kind": "editorial"
      }
    ],
    "status": "ready",
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction"
    },
    "stayOrder": 6
  }
];
