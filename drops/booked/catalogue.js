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
    "id": "readbus",
    "slug": "readbus",
    "name": "Readbus",
    "exclusive": true,
    "tagline": "For people who can read.",
    "area": "Delhi depot",
    "areaNote": "Parked overnight",
    "distanceJantarMantar": 0,
    "distanceLabel": "fiction",
    "score": 9.2,
    "scoreWord": "Well read",
    "padlocks": 3,
    "roomType": "Overnight sleeper · reclining seats · group accommodation",
    "checkout": "Subject to clearance",
    "filters": [
      "shared",
      "exclusive",
      "breakfast",
      "frontdesk",
      "meals",
      "transfer"
    ],
    "nudge": {
      "text": "One destination. No departure time.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Reclining seats",
        "lead": true,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Overnight group accommodation",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Checkout subject to clearance",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Complimentary protest transfers",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Individual reading lights",
        "lead": false,
        "group": "Facilities",
        "label": "fiction"
      }
    ],
    "description": {
      "text": "An exclusive overnight stay in a stationary sleeper bus. Recline, read and settle in with your group: the coach is parked, the berths are assigned and the departure board has nothing for you. Checkout is subject to clearance.",
      "label": "fiction"
    },
    "finePrint": [],
    "reviews": [
      {
        "name": "Ratna",
        "avatarSeed": 18,
        "title": "Stationary, in a good way.",
        "text": "Finished my book. Still waiting for the final chapter of my stay.",
        "guest": "Overnight stay · group arrival",
        "label": "fiction",
        "attachmentIndexes": [
          1
        ]
      },
      {
        "name": "Neha",
        "avatarSeed": 19,
        "title": "Excellent reading lights.",
        "text": "Plenty of legroom. Very little room for negotiation.",
        "guest": "Solo reader · assigned seat",
        "label": "fiction",
        "attachmentIndexes": [
          2
        ]
      },
      {
        "name": "Sourav",
        "avatarSeed": 20,
        "title": "The bus went nowhere.",
        "text": "Exactly what I needed after a long day of being moved around.",
        "guest": "Group stay · overnight",
        "label": "fiction",
        "attachmentIndexes": []
      }
    ],
    "images": [
      {
        "src": "./assets/readbus/exterior.png",
        "kind": "generated",
        "label": "The overnight stop",
        "alt": "A maroon sleeper bus parked in a quiet depot at dusk, with warm lights and cream curtains."
      },
      {
        "src": "./assets/readbus/interior.png",
        "kind": "generated",
        "label": "Shared sleeper interior",
        "alt": "Maroon reclining seats and upper sleeping berths along the aisle of a parked sleeper bus."
      },
      {
        "src": "./assets/readbus/reclining-seats.png",
        "kind": "generated",
        "label": "Recline and read",
        "alt": "Reclining maroon seats, a folded blanket and an individual reading light beside cream curtains."
      },
      {
        "src": "./assets/readbus/imran-khan-ifp-original.jpg",
        "kind": "portrait",
        "label": "Archival portrait",
        "alt": "Actor Imran Khan seated at IFP, holding a microphone and wearing a black polo shirt.",
        "caption": "Archival portrait of actor Imran Khan at IFP in 2023. Illustrative reference, not a Readbus host, guest endorsement or photograph of detention.",
        "credit": "Bhatnagarritam",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Imran_Khan_making_a_public_comeback_at_IFP_after_almost_a_decade.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "changes": "Original image unaltered; browser-scaled without cropping.",
        "capturedOn": "2023-10-22"
      }
    ],
    "status": "ready",
    "stayOrder": 0,
    "provenance": {
      "name": "fiction",
      "area": "fictional setting",
      "roomType": "fiction",
      "score": "fiction",
      "reviews": "Fictional first-name guest profiles with illustrated avatars; not endorsements by real people.",
      "images": "Bus images generated for an imagined experience. Archival actor portrait is independent illustrative context."
    },
    "context": {
      "heading": "A news reference, not a guest appearance",
      "text": "Actor Imran Khan was detained during a protest in Mumbai. This imagined stay is satire; he does not host or endorse Readbus.",
      "sourceUrl": "https://indianexpress.com/article/entertainment/bollywood/imran-khan-detained-in-mumbai-amid-cjp-protest-prakash-raj-anurag-kashyap-slam-crackdown-10915805/",
      "sourceLabel": "Read the reporting"
    }
  },
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
      "meals",
      "wake",
      "express"
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
        "text": "Surprise wake-up calls",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "wake",
        "addedInRefresh": true
      },
      {
        "text": "Express check-in. No questions accepted.",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "express",
        "addedInRefresh": true
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
        "text": "Delhi mein safest stay abhi jail hai. Criminals toh saare road pe ghoom rahe hain.",
        "guest": "Solo traveller · unplanned",
        "label": "fiction",
        "name": "Abhijeet",
        "avatarSeed": 0,
        "attachmentIndexes": [
          1
        ],
        "title": "Safest stay in Delhi."
      },
      {
        "text": "Didn't book. Got picked up anyway. 10/10 initiative from staff.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Kabir",
        "avatarSeed": 1,
        "attachmentIndexes": [],
        "title": "Everything handled for me."
      },
      {
        "text": "Staff were waiting at the gate with my name. I never gave them my name.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Meera",
        "avatarSeed": 2,
        "attachmentIndexes": [
          2
        ],
        "title": "An arrival to remember."
      }
    ],
    "images": [
      {
        "src": "./assets/arrival-suite-hero.png",
        "alt": "A warm cream-and-green cell with a neatly made bed and barred entrance.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/jails/cellular-door.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "A historic prison cell interior at Lincoln Castle.",
        "caption": "Lincoln Castle prison, England",
        "credit": "Peter Turner",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:A_cell_interior,_Lincoln_Castle_prison_-_geograph.org.uk_-_5096925.jpg",
        "license": "CC BY-SA 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/arrival-suite-detail.png",
        "alt": "Close-up of the folded blanket and bedside amenities in the Arrival Suite.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
      "meals",
      "smell",
      "snoring",
      "bathroom"
    ],
    "nudge": {
      "text": "14 people from your WhatsApp group are already here.",
      "label": "fiction"
    },
    "amenities": [
      {
        "text": "Complimentary protest transfers. Wherever the protest has been moved today.",
        "lead": true,
        "group": "Facilities",
        "label": "fiction"
      },
      {
        "text": "Overpowering pee smell, included",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "smell",
        "addedInRefresh": true
      },
      {
        "text": "Complimentary communal snoring",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "snoring",
        "addedInRefresh": true
      },
      {
        "text": "Communal bathrooms",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "bathroom",
        "addedInRefresh": true
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
        "label": "fiction",
        "name": "Ashutosh",
        "avatarSeed": 3,
        "attachmentIndexes": [
          0
        ],
        "title": "A proper group experience."
      },
      {
        "text": "Great for networking. Everyone had read the same thread.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Sana",
        "avatarSeed": 4,
        "attachmentIndexes": [],
        "title": "Made friends immediately."
      },
      {
        "text": "Bus was free and very punctual. It arrived before the speeches ended.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Dev",
        "avatarSeed": 5,
        "attachmentIndexes": [],
        "title": "The transfer was included."
      }
    ],
    "images": [
      {
        "src": "./assets/jails/cell-block.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "Two tiers of weathered barred cells and a central corridor.",
        "caption": "Prison cell block; location unspecified by photographer",
        "credit": "Bob Jagendorf",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Prison_cell_block.jpg",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/jantar-social-hero.png",
        "alt": "A sunlit shared cell with rolled durries, metal cups and a wide barred entrance.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/jantar-social-detail.png",
        "alt": "Close-up of rolled bedding and tea cups in the Jantar Social.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
      "meals",
      "sockets",
      "wall",
      "lighting"
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
        "text": "Zero charging points",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "sockets",
        "addedInRefresh": true
      },
      {
        "text": "24-hour wall-facing entertainment",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "wall",
        "addedInRefresh": true
      },
      {
        "text": "24-hour lighting",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "lighting",
        "addedInRefresh": true
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
        "label": "fiction",
        "name": "Sourav",
        "avatarSeed": 6,
        "attachmentIndexes": [
          0
        ],
        "title": "Finally switched off."
      },
      {
        "text": "Host was extremely responsive, especially to my tweets.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Aman",
        "avatarSeed": 7,
        "attachmentIndexes": [],
        "title": "No distractions whatsoever."
      },
      {
        "text": "Peaceful. Couldn't tell anyone where I was, which I think was the point.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Nisha",
        "avatarSeed": 8,
        "attachmentIndexes": [
          2
        ],
        "title": "Very quiet. Very monitored."
      }
    ],
    "images": [
      {
        "src": "./assets/jails/alcatraz-cell.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "A narrow Alcatraz cell seen through bars, with a bed, basin and toilet.",
        "caption": "Alcatraz, San Francisco",
        "credit": "John Salatas",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Prison_cell_in_Alcatraz.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/unplugged-residency-hero.png",
        "alt": "A quiet cell with a steel desk, stool and simple plinth bed.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/unplugged-residency-detail.png",
        "alt": "Close-up of the desk and empty charging cable in the Unplugged Residency.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
      "meals",
      "pressure",
      "wake"
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
        "text": "Pressure selected by therapist",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "pressure",
        "addedInRefresh": true
      },
      {
        "text": "Surprise midnight consultations",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "wake",
        "addedInRefresh": true
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
        "label": "fiction",
        "name": "Neha",
        "avatarSeed": 9,
        "attachmentIndexes": [
          1
        ],
        "title": "A firm recommendation."
      },
      {
        "text": "Did not request this treatment. Received it anyway. Thorough.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Priya",
        "avatarSeed": 10,
        "attachmentIndexes": [],
        "title": "Service before you ask."
      },
      {
        "text": "I came for the protest, stayed for the posture correction.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Arjun",
        "avatarSeed": 11,
        "attachmentIndexes": [],
        "title": "Full-body experience."
      }
    ],
    "images": [
      {
        "src": "./assets/wellness-wing-hero.png",
        "alt": "A sunlit cream-and-green cell with a towel, bamboo stick and brass bowl arranged on a central plinth.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/jails/kilmainham-cell.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "A dark cell with a small window and writing across its walls.",
        "caption": "Kilmainham Gaol, Dublin",
        "credit": "GrimsbyT",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kilmainham_Gaol_cell.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/wellness-wing-detail.png",
        "alt": "Close-up of the Wellness Wing towel, bamboo stick, brass bowl and neem leaves.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
        "name": "Pre-protest conditioning",
        "description": "Get beaten up before the protest. Arrive in the right spirit.",
        "duration": "Before arrival",
        "price": "Complimentary",
        "label": "fiction"
      },
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
      "meals",
      "air",
      "mosquitoes",
      "bathroom"
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
        "text": "Fresh air, subject to availability",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "air",
        "addedInRefresh": true
      },
      {
        "text": "Mosquitoes included. Repellent extra.",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "mosquitoes",
        "addedInRefresh": true
      },
      {
        "text": "Communal bathrooms",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "bathroom",
        "addedInRefresh": true
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
        "label": "fiction",
        "name": "Ratna",
        "avatarSeed": 12,
        "attachmentIndexes": [
          1
        ],
        "title": "Fresh air, briefly."
      },
      {
        "text": "Staff were very attentive. Never let me out of their sight.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Neel",
        "avatarSeed": 13,
        "attachmentIndexes": [],
        "title": "A room with boundaries."
      },
      {
        "text": "Beautiful light at 4pm. I was told it was 4pm.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Kavya",
        "avatarSeed": 14,
        "attachmentIndexes": [
          2
        ],
        "title": "Closer to nature."
      }
    ],
    "images": [
      {
        "src": "./assets/courtyard-view-hero.png",
        "alt": "A warm cell with two plinth beds and a barred door opening toward a tree-filled courtyard.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/jails/cellular-interior.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "Worn brick and plaster walls around a small barred window.",
        "caption": "Cellular Jail, Port Blair",
        "credit": "Harvinder Chandigarh",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cellular_Jail,_Port_Blair,_India,_inner_view_of_the_cell_of_prisoners.jpg",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/courtyard-view-detail.png",
        "alt": "Close-up of the Courtyard View bed and brass bucket beside the courtyard entrance.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
      "meals",
      "lighting",
      "extensions",
      "wake"
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
        "text": "Lights-on turndown service",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "lighting",
        "addedInRefresh": true
      },
      {
        "text": "Automatic stay extensions",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "extensions",
        "addedInRefresh": true
      },
      {
        "text": "Surprise wake-up calls",
        "lead": false,
        "group": "Facilities",
        "label": "fiction",
        "filter": "wake",
        "addedInRefresh": true
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
        "label": "fiction",
        "name": "Aditya",
        "avatarSeed": 15,
        "attachmentIndexes": [
          0
        ],
        "title": "Excellent long-stay value."
      },
      {
        "text": "Zero restaurant decisions. Zero decisions in general.",
        "guest": "Group stay · arranged",
        "label": "fiction",
        "name": "Maya",
        "avatarSeed": 16,
        "attachmentIndexes": [],
        "title": "Still here."
      },
      {
        "text": "Would not stay again. Was not asked.",
        "guest": "City break · extended",
        "label": "fiction",
        "name": "Rehan",
        "avatarSeed": 17,
        "attachmentIndexes": [],
        "title": "No rush to leave."
      }
    ],
    "images": [
      {
        "src": "./assets/jails/block-c-cell.jpg",
        "kind": "jail",
        "label": "Cell interior",
        "alt": "An empty cell with peeling walls, a window, sink and toilet.",
        "caption": "Cell interior, block C",
        "credit": "Oliver Dixon",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Interior_of_a_prison_cell_in_block_C_-_geograph.org.uk_-_7791614.jpg",
        "license": "CC BY-SA 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
        "changes": "Resized for display; card framing may crop the image."
      },
      {
        "src": "./assets/extended-stay-hero.png",
        "alt": "A cream-and-blue cell with a made bed, meal tray and caged ceiling fan.",
        "label": "Room overview",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
      },
      {
        "src": "./assets/extended-stay-detail.png",
        "alt": "Close-up of the meal tray and folded blankets in the Extended Stay.",
        "label": "A closer look",
        "provenance": "AI-generated fictional interior; not a photograph of a real facility.",
        "kind": "generated"
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
