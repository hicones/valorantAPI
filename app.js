const express = require("express");

const app = express();

const PORT = process.env.PORT || 8877;

app.get("/agents", (req, res) => {
  res.json([
    {
      uuid: "dade69b4-4f5a-8528-247b-219e5a1facd6",
      displayName: "Fade",
      description:
        "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png",
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Initiator",
        description:
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Seize",
          description:
            "EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.",
          displayIcon:
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4",
        },
        {
          slot: "E",
          displayName: "Haunt",
          description:
            "EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
          displayIcon:
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4",
        },
        {
          slot: "C  ",
          displayName: "Prowler",
          description:
            "EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.",
          displayIcon:
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Nightfall",
          description:
            "EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.",
          displayIcon:
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.578,
        maxDuration: 2.578,
        mediaList: [
          {
            id: 963067082,
            wwise: "https://media.valorant-api.com/sounds/963067082.wem",
            wave: "https://media.valorant-api.com/sounds/963067082.wav",
          },
        ],
      },
    },
    {
      uuid: "5f8d3a7f-467b-97f3-062c-13acf203c006",
      displayName: "Breach",
      description:
        "The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png",
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Initiator",
        description:
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Flashpoint",
          description:
            "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.",
          displayIcon:
            "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Fault Line",
          description:
            "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.",
          displayIcon:
            "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Aftershock",
          description:
            "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
          displayIcon:
            "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Rolling Thunder",
          description:
            "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.",
          displayIcon:
            "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.456469,
        maxDuration: 2.456469,
        mediaList: [
          {
            id: 802792402,
            wwise: "https://media.valorant-api.com/sounds/802792402.wem",
            wave: "https://media.valorant-api.com/sounds/802792402.wav",
          },
        ],
      },
    },
    {
      uuid: "f94c3b30-42be-e959-889c-5aa313dba261",
      displayName: "Raze",
      description:
        'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of "boom".',
      characterTags: ["Area Damage Specialist"],
      displayIcon:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/background.png",
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Blast Pack",
          description:
            "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
          displayIcon:
            "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Paint Shells",
          description:
            "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
          displayIcon:
            "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Boom Bot",
          description:
            "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
          displayIcon:
            "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Showstopper",
          description:
            "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.",
          displayIcon:
            "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.541198,
        maxDuration: 1.541198,
        mediaList: [
          {
            id: 632864455,
            wwise: "https://media.valorant-api.com/sounds/632864455.wem",
            wave: "https://media.valorant-api.com/sounds/632864455.wav",
          },
        ],
      },
    },
    {
      uuid: "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
      displayName: "Chamber",
      description:
        "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/background.png",
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinel",
        description:
          "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Headhunter",
          description:
            "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
          displayIcon:
            "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4",
        },
        {
          slot: "E",
          displayName: "Rendezvous",
          description:
            "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor.  Anchors can be picked up to be REDEPLOYED.",
          displayIcon:
            "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4",
        },
        {
          slot: "C  ",
          displayName: "Trademark",
          description:
            "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them , creating a lingering field that slows players caught inside of it.",
          displayIcon:
            "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Tour De Force",
          description:
            "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit.  Killing an enemy creates a lingering field that slows players caught inside of it.",
          displayIcon:
            "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.939385,
        maxDuration: 1.939385,
        mediaList: [
          {
            id: 765052468,
            wwise: "https://media.valorant-api.com/sounds/765052468.wem",
            wave: "https://media.valorant-api.com/sounds/765052468.wav",
          },
        ],
      },
    },
    {
      uuid: "601dbbe7-43ce-be57-2a40-4abd24953621",
      displayName: "KAY/O",
      description:
        "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/background.png",
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Initiator",
        description:
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "FLASH/drive",
          description:
            "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
          displayIcon:
            "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4",
        },
        {
          slot: "E",
          displayName: "ZERO/point",
          description:
            "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
          displayIcon:
            "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "FRAG/ment",
          description:
            "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
          displayIcon:
            "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "NULL/cmd",
          description:
            "INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are suppressed for a short duration. While overloaded, KAY/O gains combat stim and can be re-stabilized if downed.",
          displayIcon:
            "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.034417,
        maxDuration: 1.034417,
        mediaList: [
          {
            id: 170847866,
            wwise: "https://media.valorant-api.com/sounds/170847866.wem",
            wave: "https://media.valorant-api.com/sounds/170847866.wav",
          },
        ],
      },
    },
    {
      uuid: "6f2a04ca-43e0-be17-7f36-b3908627744d",
      displayName: "Skye",
      description:
        "Hailing from Australia, Skye and her band of beasts trailblaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/background.png",
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Initiator",
        description:
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Trailblazer",
          description:
            "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator.  While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
          displayIcon:
            "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4",
        },
        {
          slot: "E",
          displayName: "Guiding Light",
          description:
            "EQUIP a hawk trinket.  FIRE to send it forward.  HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash.",
          displayIcon:
            "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Regrowth",
          description:
            "EQUIP a healing trinket.  HOLD FIRE to channel, healing allies in range and line of sight.  Can be reused until her healing pool is depleted.  Skye cannot heal herself.",
          displayIcon:
            "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Seekers",
          description:
            "EQUIP a Seeker trinket.  FIRE to send out three Seekers to track down the three closest enemies.  If a Seeker reaches its target, it nearsights them.",
          displayIcon:
            "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.807344,
        maxDuration: 1.807344,
        mediaList: [
          {
            id: 452875258,
            wwise: "https://media.valorant-api.com/sounds/452875258.wem",
            wave: "https://media.valorant-api.com/sounds/452875258.wav",
          },
        ],
      },
    },
    {
      uuid: "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
      displayName: "Cypher",
      description:
        "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
      characterTags: ["Detection", "Defensive Lockdown"],
      displayIcon:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/background.png",
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinel",
        description:
          "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Cyber Cage",
          description:
            "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it",
          displayIcon:
            "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Spycam",
          description:
            "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
          displayIcon:
            "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Trapwire",
          description:
            "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
          displayIcon:
            "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Neural Theft",
          description:
            "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
          displayIcon:
            "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.807927,
        maxDuration: 2.807927,
        mediaList: [
          {
            id: 246514732,
            wwise: "https://media.valorant-api.com/sounds/246514732.wem",
            wave: "https://media.valorant-api.com/sounds/246514732.wav",
          },
        ],
      },
    },
    {
      uuid: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
      displayName: "Sova",
      description:
        "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. ",
      characterTags: ["Detection", "Area Damage"],
      displayIcon:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/background.png",
      role: {
        uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
        displayName: "Initiator",
        description:
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Shock Bolt",
          description:
            "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
          displayIcon:
            "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Recon Bolt",
          description:
            "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow. ",
          displayIcon:
            "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Owl Drone",
          description:
            "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
          displayIcon:
            "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Hunter's Fury",
          description:
            "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
          displayIcon:
            "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.021729,
        maxDuration: 2.021729,
        mediaList: [
          {
            id: 130865070,
            wwise: "https://media.valorant-api.com/sounds/130865070.wem",
            wave: "https://media.valorant-api.com/sounds/130865070.wav",
          },
        ],
      },
    },
    {
      uuid: "1e58de9c-4950-5125-93e9-a0aee9f98746",
      displayName: "Killjoy",
      description:
        "The genius of Germany, Killjoy secures and defends key battlefield positions with a collection of traps, turrets, and mines. Each invention is primed to punish any assailant too dumb to back down.",
      characterTags: ["Defensive Lockdown", "Area Damage"],
      displayIcon:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/background.png",
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinel",
        description:
          "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "ALARMBOT",
          description:
            "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range.  After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
          displayIcon:
            "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4",
        },
        {
          slot: "E",
          displayName: "TURRET",
          description:
            "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
          displayIcon:
            "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4",
        },
        {
          slot: "C  ",
          displayName: "Nanoswarm",
          description:
            "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.  ",
          displayIcon:
            "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Lockdown",
          description:
            "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
          displayIcon:
            "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.689708,
        maxDuration: 2.689708,
        mediaList: [
          {
            id: 1062625853,
            wwise: "https://media.valorant-api.com/sounds/1062625853.wem",
            wave: "https://media.valorant-api.com/sounds/1062625853.wav",
          },
        ],
      },
    },
    {
      uuid: "707eab51-4836-f488-046a-cda6bf494859",
      displayName: "Viper",
      description:
        "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
      characterTags: ["Vision Control Specialist"],
      displayIcon:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/background.png",
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controller",
        description:
          "Controllers are experts in slicing up dangerous territory to set their team up for success.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Poison Cloud",
          description:
            "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
          displayIcon:
            "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Toxic Screen",
          description:
            "EQUIP a gas emitter launcher that penetrates terrain. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
          displayIcon:
            "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Snake Bite",
          description:
            "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable.",
          displayIcon:
            "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Viper's Pit",
          description:
            "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. HOLD the ability key to disperse the cloud early.",
          displayIcon:
            "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.445958,
        maxDuration: 2.445958,
        mediaList: [
          {
            id: 204662687,
            wwise: "https://media.valorant-api.com/sounds/204662687.wem",
            wave: "https://media.valorant-api.com/sounds/204662687.wav",
          },
        ],
      },
    },
    {
      uuid: "eb93336a-449b-9c1b-0a54-a891f7921d69",
      displayName: "Phoenix",
      description:
        "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms.",
      characterTags: ["Flexibility", "Self-Sustain"],
      displayIcon:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/background.png",
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Curveball",
          description:
            "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
          displayIcon:
            "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Hot Hands",
          description:
            "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
          displayIcon:
            "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Blaze",
          description:
            "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Run it Back",
          description:
            "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health. ",
          displayIcon:
            "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.258333,
        maxDuration: 2.258333,
        mediaList: [
          {
            id: 384959611,
            wwise: "https://media.valorant-api.com/sounds/384959611.wem",
            wave: "https://media.valorant-api.com/sounds/384959611.wav",
          },
        ],
      },
    },
    {
      uuid: "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
      displayName: "Astra",
      description:
        "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/background.png",
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controller",
        description:
          "Controllers are experts in slicing up dangerous territory to set their team up for success.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Nova Pulse",
          description:
            "Place Stars in Astral Form (Ultimate Key).\r\n\r\nACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
          displayIcon:
            "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4",
        },
        {
          slot: "E",
          displayName: "Nebula  / Dissipate",
          description:
            "Place Stars in Astral Form (Ultimate Key). \r\n\r\nACTIVATE a Star to transform it into a Nebula (smoke).\r\n\r\nUSE a Star to Dissipate it, returning the star to be placed in a new location after a delay.\r\n\r\nDissipate briefly forms a fake Nebula at the Star's location before returning.",
          displayIcon:
            "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4",
        },
        {
          slot: "C  ",
          displayName: "Gravity Well",
          description:
            "Place Stars in Astral Form (Ultimate Key).\r\n\r\nACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable.",
          displayIcon:
            "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Astral Form / Cosmic Divide",
          description:
            "ACTIVATE to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well.\r\n\r\nWhen Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
          displayIcon:
            "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4",
        },
      ],
      voiceLine: {
        minDuration: 3.18301,
        maxDuration: 3.18301,
        mediaList: [
          {
            id: 594322343,
            wwise: "https://media.valorant-api.com/sounds/594322343.wem",
            wave: "https://media.valorant-api.com/sounds/594322343.wav",
          },
        ],
      },
    },
    {
      uuid: "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
      displayName: "Brimstone",
      description:
        "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.  ",
      characterTags: ["Vision Control", "Area Damage"],
      displayIcon:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/background.png",
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controller",
        description:
          "Controllers are experts in slicing up dangerous territory to set their team up for success.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Incendiary",
          description:
            "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
          displayIcon:
            "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Sky Smoke",
          description:
            "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
          displayIcon:
            "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Stim Beacon",
          description:
            "INSTANTLY toss down a stim beacon. Upon landing, it creates a field that grants players RapidFire and a speed boost.",
          displayIcon:
            "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Orbital Strike",
          description:
            "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
          displayIcon:
            "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 4.969511,
        maxDuration: 4.969511,
        mediaList: [
          {
            id: 421554800,
            wwise: "https://media.valorant-api.com/sounds/421554800.wem",
            wave: "https://media.valorant-api.com/sounds/421554800.wav",
          },
        ],
      },
    },
    {
      uuid: "bb2a4828-46eb-8cd1-e765-15848195d751",
      displayName: "Neon",
      description:
        "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard then strikes them down quicker than lightning.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/killfeedportrait.png",
      background: null,
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Relay Bolt",
          description:
            "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
          displayIcon:
            "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4",
        },
        {
          slot: "E",
          displayName: "High Gear",
          description:
            "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4",
        },
        {
          slot: "C  ",
          displayName: "Fast Lane",
          description:
            "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
          displayIcon:
            "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Overdrive",
          description:
            "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
          displayIcon:
            "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.26851,
        maxDuration: 1.26851,
        mediaList: [
          {
            id: 5690468,
            wwise: "https://media.valorant-api.com/sounds/5690468.wem",
            wave: "https://media.valorant-api.com/sounds/5690468.wav",
          },
        ],
      },
    },
    {
      uuid: "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
      displayName: "Yoru",
      description:
        "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
      characterTags: null,
      displayIcon:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/background.png",
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "BLINDSIDE",
          description:
            "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
          displayIcon:
            "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4",
        },
        {
          slot: "E",
          displayName: "GATECRASH",
          description:
            "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport",
          displayIcon:
            "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4",
        },
        {
          slot: "C  ",
          displayName: "FAKEOUT",
          description:
            "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward.  Mirror images explode in a blinding flash when destroyed by enemies.",
          displayIcon:
            "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "DIMENSIONAL DRIFT",
          description:
            "EQUIP a mask that can see between dimensions FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
          displayIcon:
            "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4",
        },
      ],
      voiceLine: {
        minDuration: 4.105177,
        maxDuration: 4.105177,
        mediaList: [
          {
            id: 107320642,
            wwise: "https://media.valorant-api.com/sounds/107320642.wem",
            wave: "https://media.valorant-api.com/sounds/107320642.wav",
          },
        ],
      },
    },
    {
      uuid: "569fdd95-4d10-43ab-ca70-79becc718b46",
      displayName: "Sage",
      description:
        "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.",
      characterTags: ["Recovery", "Stalling"],
      displayIcon:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/background.png",
      role: {
        uuid: "5fc02f99-4091-4486-a531-98459a3e95e9",
        displayName: "Sentinel",
        description:
          "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Slow Orb",
          description:
            "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
          displayIcon:
            "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Healing Orb",
          description:
            "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
          displayIcon:
            "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Barrier Orb",
          description:
            "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
          displayIcon:
            "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Resurrection",
          description:
            "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
          displayIcon:
            "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 2.07,
        maxDuration: 2.07,
        mediaList: [
          {
            id: 119342169,
            wwise: "https://media.valorant-api.com/sounds/119342169.wem",
            wave: "https://media.valorant-api.com/sounds/119342169.wav",
          },
        ],
      },
    },
    {
      uuid: "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
      displayName: "Reyna",
      description:
        "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her sharply dependant on performance. ",
      characterTags: ["Evasion", "Self-Sustain"],
      displayIcon:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/background.png",
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Devour",
          description:
            "Soul Harvest: Enemies that die to Reyna, or die within 3 seconds of taking damage from Reyna, leave behind Soul Orbs that last 3 seconds.\r\nDevour: INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the Soul Orb.",
          displayIcon:
            "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Dismiss",
          description:
            "INSTANTLY consume a nearby Soul Orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
          displayIcon:
            "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Leer",
          description:
            "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
          displayIcon:
            "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Empress",
          description:
            "INSTANTLY enter a frenzy, increasing firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities. When an enemy dies to Reyna, or dies within 3 seconds of taking damage from Reyna, the duration is renewed.",
          displayIcon:
            "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 3.430208,
        maxDuration: 3.430208,
        mediaList: [
          {
            id: 847719523,
            wwise: "https://media.valorant-api.com/sounds/847719523.wem",
            wave: "https://media.valorant-api.com/sounds/847719523.wav",
          },
        ],
      },
    },
    {
      uuid: "8e253930-4c05-31dd-1b6c-968525494517",
      displayName: "Omen",
      description:
        "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to uncover where he might strike next.",
      characterTags: ["Mobility", "Vision Control"],
      displayIcon:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/background.png",
      role: {
        uuid: "4ee40330-ecdd-4f2f-98a8-eb1243428373",
        displayName: "Controller",
        description:
          "Controllers are experts in slicing up dangerous territory to set their team up for success.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Strategist_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Paranoia",
          description:
            "EQUIP a blinding orb.  FIRE to throw it forward, briefly reducing the vision range and deafening all players it touches. This projectile can pass straight through walls.",
          displayIcon:
            "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Dark Cover",
          description:
            "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD SECONDARY FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
          displayIcon:
            "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Shrouded Step",
          description:
            "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
          displayIcon:
            "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "From the Shadows",
          description:
            "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport.",
          displayIcon:
            "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 3.758667,
        maxDuration: 3.758667,
        mediaList: [
          {
            id: 717842149,
            wwise: "https://media.valorant-api.com/sounds/717842149.wem",
            wave: "https://media.valorant-api.com/sounds/717842149.wav",
          },
        ],
      },
    },
    {
      uuid: "add6443a-41bd-e414-f6ad-e58d267f4e95",
      displayName: "Jett",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      characterTags: ["Evasion", "Mobility"],
      displayIcon:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
      displayIconSmall:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png",
      bustPortrait:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/bustportrait.png",
      fullPortrait:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
      fullPortraitV2:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportraitv2.png",
      killfeedPortrait:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png",
      background:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png",
      role: {
        uuid: "dbe8757e-9e92-4ed4-b39f-9dfc589691d4",
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
        assetPath:
          "ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset",
      },
      abilities: [
        {
          slot: "Q",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4",
        },
        {
          slot: "E",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4",
        },
        {
          slot: "C  ",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALTERNATE FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
          videoUrl:
            "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4",
        },
      ],
      voiceLine: {
        minDuration: 1.048729,
        maxDuration: 1.048729,
        mediaList: [
          {
            id: 878055936,
            wwise: "https://media.valorant-api.com/sounds/878055936.wem",
            wave: "https://media.valorant-api.com/sounds/878055936.wav",
          },
        ],
      },
    },
  ]);
});

app.get("/guns", (req, res) => {
  res.json([
    {
      uuid: "63e6c2b6-4a8e-869c-3d4c-e38355226584",
      displayName: "Odin",
      category: "EEquippableCategory::Heavy",
      displayIcon:
        "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/killstreamicon.png",
      description:
        "Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.",
      weaponStats: {
        fireRate: 12,
        magazineSize: 100,
        runSpeedMultiplier: 0.76,
        equipTimeSeconds: 1.25,
        reloadTimeSeconds: 5,
        firstBulletAccuracy: 0.8,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::High",
        feature: "EWeaponStatsFeature::ROFIncrease",
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.15,
          fireRate: 15.6,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: 0.79,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 30,
            headDamage: 95,
            bodyDamage: 38,
            legDamage: 32.3,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 77.5,
            bodyDamage: 31,
            legDamage: 26.35,
          },
        ],
      },
      shopData: {
        cost: 3200,
        category: "Heavy Weapons",
        categoryText: "Heavy Weapons",
        gridPosition: {
          row: 2,
          column: 2,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HeavyMachineGunPurchase",
      },
    },
    {
      uuid: "55d8a0f4-4274-ca67-fe2c-06ab45efdf58",
      displayName: "Ares",
      category: "EEquippableCategory::Heavy",
      displayIcon:
        "https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/killstreamicon.png",
      description:
        "The Ares’ large magazine means it excels at suppressive fire or dealing heavy damage to clustered groups.",
      weaponStats: {
        fireRate: 13,
        magazineSize: 50,
        runSpeedMultiplier: 0.76,
        equipTimeSeconds: 1.25,
        reloadTimeSeconds: 3.25,
        firstBulletAccuracy: 1,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::High",
        feature: null,
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.15,
          fireRate: 13,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: 0.9,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 30,
            headDamage: 72,
            bodyDamage: 30,
            legDamage: 25.5,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 67.200005,
            bodyDamage: 28,
            legDamage: 23.800001,
          },
        ],
      },
      shopData: {
        cost: 1600,
        category: "Heavy Weapons",
        categoryText: "Heavy Weapons",
        gridPosition: {
          row: 1,
          column: 1,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/LMG/LightMachineGunPurchase",
      },
    },
    {
      uuid: "9c82e19d-4575-0200-1a81-3eacf00cf872",
      displayName: "Vandal",
      category: "EEquippableCategory::Rifle",
      displayIcon:
        "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/killstreamicon.png",
      description:
        "Extended fire results in less stability, however. The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head.",
      weaponStats: {
        fireRate: 9.75,
        magazineSize: 25,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 0.25,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Medium",
        feature: null,
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.25,
          fireRate: 8.775,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: 0.1575,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 50,
            headDamage: 160,
            bodyDamage: 40,
            legDamage: 34,
          },
        ],
      },
      shopData: {
        cost: 2900,
        category: "Rifles",
        categoryText: "Assault Rifles",
        gridPosition: {
          row: 2,
          column: 3,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Rifles/AK/AK47WeaponPurchase",
      },
    },
    {
      uuid: "ae3de142-4d85-2547-dd26-4e90bed35cf7",
      displayName: "Bulldog",
      category: "EEquippableCategory::Rifle",
      displayIcon:
        "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/killstreamicon.png",
      description:
        "A surefire beast when you can pick your shots. Alt. fire let’s you ADS and spew accurate, short bursts at anyone who tries you from medium to long-range.",
      weaponStats: {
        fireRate: 10,
        magazineSize: 24,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 0.3,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Medium",
        feature: null,
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.25,
          fireRate: 6.315715,
          runSpeedMultiplier: 0.76,
          burstCount: 3,
          firstBulletAccuracy: 0.3,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 50,
            headDamage: 115.5,
            bodyDamage: 35,
            legDamage: 29.75,
          },
        ],
      },
      shopData: {
        cost: 2050,
        category: "Rifles",
        categoryText: "Assault Rifles",
        gridPosition: {
          row: 1,
          column: 3,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Rifles/Burst/BurstPurchase",
      },
    },
    {
      uuid: "ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",
      displayName: "Phantom",
      category: "EEquippableCategory::Rifle",
      displayIcon:
        "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/killstreamicon.png",
      description:
        "Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.",
      weaponStats: {
        fireRate: 11,
        magazineSize: 30,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 0.2,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Medium",
        feature: "EWeaponStatsFeature::Silenced",
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.25,
          fireRate: 9.9,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: 0.11000001,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 15,
            headDamage: 156,
            bodyDamage: 39,
            legDamage: 33.15,
          },
          {
            rangeStartMeters: 15,
            rangeEndMeters: 30,
            headDamage: 140,
            bodyDamage: 35,
            legDamage: 29.75,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 124,
            bodyDamage: 31,
            legDamage: 26.35,
          },
        ],
      },
      shopData: {
        cost: 2900,
        category: "Rifles",
        categoryText: "Assault Rifles",
        gridPosition: {
          row: 2,
          column: 1,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/ACRWeaponPurchase",
      },
    },
    {
      uuid: "ec845bf4-4f79-ddda-a3da-0db3774b2794",
      displayName: "Judge",
      category: "EEquippableCategory::Shotgun",
      displayIcon:
        "https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/killstreamicon.png",
      description:
        "The Judge is stable at the stand but volatile when fired rapidly. Primary fire hammers short range targets and you’ll need to be steady to nail anything beyond an arm's-length.",
      weaponStats: {
        fireRate: 3.5,
        magazineSize: 7,
        runSpeedMultiplier: 0.75,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.2,
        firstBulletAccuracy: 2.25,
        shotgunPelletCount: 12,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: null,
        altFireType: null,
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 10,
            headDamage: 34,
            bodyDamage: 17,
            legDamage: 14.450001,
          },
          {
            rangeStartMeters: 10,
            rangeEndMeters: 15,
            headDamage: 20,
            bodyDamage: 10,
            legDamage: 8.5,
          },
          {
            rangeStartMeters: 15,
            rangeEndMeters: 50,
            headDamage: 14,
            bodyDamage: 7,
            legDamage: 5.9500003,
          },
        ],
      },
      shopData: {
        cost: 1850,
        category: "Shotguns",
        categoryText: "Shotguns",
        gridPosition: {
          row: 1,
          column: 0,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Shotguns/AutoShotgun/Autoshotgun_Purchase",
      },
    },
    {
      uuid: "910be174-449b-c412-ab22-d0873436b21b",
      displayName: "Bucky",
      category: "EEquippableCategory::Shotgun",
      displayIcon:
        "https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/killstreamicon.png",
      description:
        "Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.",
      weaponStats: {
        fireRate: 1.1,
        magazineSize: 5,
        runSpeedMultiplier: 0.75,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 2.6,
        shotgunPelletCount: 15,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: "EWeaponAltFireDisplayType::AirBurst",
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: {
          shotgunPelletCount: 5,
          burstDistance: 7.5,
        },
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 8,
            headDamage: 40,
            bodyDamage: 20,
            legDamage: 17,
          },
          {
            rangeStartMeters: 8,
            rangeEndMeters: 12,
            headDamage: 26,
            bodyDamage: 13,
            legDamage: 11.05,
          },
          {
            rangeStartMeters: 12,
            rangeEndMeters: 50,
            headDamage: 18,
            bodyDamage: 9,
            legDamage: 7.65,
          },
        ],
      },
      shopData: {
        cost: 850,
        category: "Shotguns",
        categoryText: "Shotguns",
        gridPosition: null,
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Shotguns/PumpShotgun/PumpShotgunPurchase",
      },
    },
    {
      uuid: "44d4e95c-4157-0037-81b2-17841bf2e8e3",
      displayName: "Frenzy",
      category: "EEquippableCategory::Sidearm",
      displayIcon:
        "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/killstreamicon.png",
      description:
        "Lightweight machine pistol that excels at firing on the move. It’s high rate-of-fire can be difficult to control, so try short bursts at medium ranges.",
      weaponStats: {
        fireRate: 10,
        magazineSize: 13,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 1.5,
        firstBulletAccuracy: 0.45,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: null,
        altFireType: null,
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 20,
            headDamage: 78,
            bodyDamage: 26,
            legDamage: 22.1,
          },
          {
            rangeStartMeters: 20,
            rangeEndMeters: 50,
            headDamage: 63,
            bodyDamage: 21,
            legDamage: 17.85,
          },
        ],
      },
      shopData: {
        cost: 450,
        category: "Pistols",
        categoryText: "Sidearms",
        gridPosition: {
          row: 0,
          column: 1,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Sidearms/AutoPistol/AutomaticPistolPurchase",
      },
    },
    {
      uuid: "29a0cfab-485b-f5d5-779a-b59f85e204a8",
      displayName: "Classic",
      category: "EEquippableCategory::Sidearm",
      displayIcon:
        "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/killstreamicon.png",
      description:
        "Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.",
      weaponStats: {
        fireRate: 6.75,
        magazineSize: 12,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 0.75,
        reloadTimeSeconds: 1.75,
        firstBulletAccuracy: 0.4,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: "EWeaponAltFireDisplayType::Shotgun",
        adsStats: null,
        altShotgunStats: {
          shotgunPelletCount: 3,
          burstRate: 2.22,
        },
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 30,
            headDamage: 78,
            bodyDamage: 26,
            legDamage: 22.1,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 66,
            bodyDamage: 22,
            legDamage: 18.7,
          },
        ],
      },
      shopData: {
        cost: 0,
        category: "Pistols",
        categoryText: "Sidearms",
        gridPosition: {
          row: 0,
          column: 2,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Sidearms/BasePistol/BasePistolPurchase",
      },
    },
    {
      uuid: "1baa85b4-4c70-1284-64bb-6481dfc3bb4e",
      displayName: "Ghost",
      category: "EEquippableCategory::Sidearm",
      displayIcon:
        "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/killstreamicon.png",
      description:
        "The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.",
      weaponStats: {
        fireRate: 6.75,
        magazineSize: 15,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 0.75,
        reloadTimeSeconds: 1.5,
        firstBulletAccuracy: 0.3,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Medium",
        feature: "EWeaponStatsFeature::Silenced",
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: null,
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 30,
            headDamage: 105,
            bodyDamage: 30,
            legDamage: 25.5,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 87.5,
            bodyDamage: 25,
            legDamage: 21.25,
          },
        ],
      },
      shopData: {
        cost: 500,
        category: "Pistols",
        categoryText: "Sidearms",
        gridPosition: {
          row: 0,
          column: 3,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Sidearms/Luger/LugerPistolPurchase",
      },
    },
    {
      uuid: "e336c6b8-418d-9340-d77f-7a9e4cfe0702",
      displayName: "Sheriff",
      category: "EEquippableCategory::Sidearm",
      displayIcon:
        "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/killstreamicon.png",
      description:
        "It’s high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.",
      weaponStats: {
        fireRate: 4,
        magazineSize: 6,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.25,
        firstBulletAccuracy: 0.25,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::High",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: null,
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 30,
            headDamage: 159.5,
            bodyDamage: 55,
            legDamage: 46.75,
          },
          {
            rangeStartMeters: 30,
            rangeEndMeters: 50,
            headDamage: 145,
            bodyDamage: 50,
            legDamage: 42.5,
          },
        ],
      },
      shopData: {
        cost: 800,
        category: "Pistols",
        categoryText: "Sidearms",
        gridPosition: {
          row: 0,
          column: 4,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Sidearms/Revolver/RevolverPistolPurchase",
      },
    },
    {
      uuid: "42da8ccc-40d5-affc-beec-15aa47b42eda",
      displayName: "Shorty",
      category: "EEquippableCategory::Sidearm",
      displayIcon:
        "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/killstreamicon.png",
      description:
        "A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.",
      weaponStats: {
        fireRate: 3.33,
        magazineSize: 2,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 0.75,
        reloadTimeSeconds: 1.75,
        firstBulletAccuracy: 4,
        shotgunPelletCount: 15,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: null,
        adsStats: null,
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 7,
            headDamage: 24,
            bodyDamage: 12,
            legDamage: 10.200001,
          },
          {
            rangeStartMeters: 7,
            rangeEndMeters: 15,
            headDamage: 16,
            bodyDamage: 8,
            legDamage: 6.8,
          },
          {
            rangeStartMeters: 15,
            rangeEndMeters: 50,
            headDamage: 6,
            bodyDamage: 3,
            legDamage: 2.5500002,
          },
        ],
      },
      shopData: {
        cost: 150,
        category: "Pistols",
        categoryText: "Sidearms",
        gridPosition: null,
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/Sidearms/Slim/SawedOffShotgunPurchase",
      },
    },
    {
      uuid: "a03b24d3-4319-996d-0f8c-94bbfba1dfc7",
      displayName: "Operator",
      category: "EEquippableCategory::Sniper",
      displayIcon:
        "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/killstreamicon.png",
      description:
        "A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot.",
      weaponStats: {
        fireRate: 0.6,
        magazineSize: 5,
        runSpeedMultiplier: 0.76,
        equipTimeSeconds: 1.5,
        reloadTimeSeconds: 3.7,
        firstBulletAccuracy: 5,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::High",
        feature: "EWeaponStatsFeature::DualZoom",
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 2.5,
          fireRate: 0.75,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: -1,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 50,
            headDamage: 255,
            bodyDamage: 150,
            legDamage: 120,
          },
        ],
      },
      shopData: {
        cost: 4700,
        category: "Sniper Rifles",
        categoryText: "Sniper Rifles",
        gridPosition: {
          row: 3,
          column: 4,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/SniperRifles/Boltsniper/BoltSniperRiflePurchase",
      },
    },
    {
      uuid: "4ade7faa-4cf1-8376-95ef-39884480959b",
      displayName: "Guardian",
      category: "EEquippableCategory::Rifle",
      displayIcon:
        "https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/killstreamicon.png",
      description:
        "The designated marksman rifle. Heavier and less mobile relative to other rifles but precise and powerful. Headhunt when enemies appear at medium to long distances.",
      weaponStats: {
        fireRate: 5.25,
        magazineSize: 12,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 0.1,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::High",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.5,
          fireRate: 5.25,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: -1,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 50,
            headDamage: 195,
            bodyDamage: 65,
            legDamage: 48.75,
          },
        ],
      },
      shopData: {
        cost: 2250,
        category: "Rifles",
        categoryText: "Assault Rifles",
        gridPosition: {
          row: 2,
          column: 4,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/SniperRifles/DMR/DMRWeaponPurchase",
      },
    },
    {
      uuid: "c4883e50-4494-202c-3ec3-6b8a9284f00b",
      displayName: "Marshal",
      category: "EEquippableCategory::Sniper",
      displayIcon:
        "https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/killstreamicon.png",
      description:
        "A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.",
      weaponStats: {
        fireRate: 1.5,
        magazineSize: 5,
        runSpeedMultiplier: 0.8,
        equipTimeSeconds: 1.25,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 1,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Medium",
        feature: null,
        fireMode: "EWeaponFireModeDisplayType::SemiAutomatic",
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 3.5,
          fireRate: 1.2,
          runSpeedMultiplier: 0.9,
          burstCount: 1,
          firstBulletAccuracy: -1,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 50,
            headDamage: 202,
            bodyDamage: 101,
            legDamage: 85.850006,
          },
        ],
      },
      shopData: {
        cost: 950,
        category: "Sniper Rifles",
        categoryText: "Sniper Rifles",
        gridPosition: {
          row: 0,
          column: 4,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/SniperRifles/Leversniper/LeverSniperRiflePurchase",
      },
    },
    {
      uuid: "462080d1-4035-2937-7c09-27aa2a5c27a7",
      displayName: "Spectre",
      category: "EEquippableCategory::SMG",
      displayIcon:
        "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/killstreamicon.png",
      description:
        "A jack-of-all-trades weapon with a great balance of damage, fire rate, and accuracy—at both short and mid range. It haunts the corners of every map and requires only steady aim to drop foes at long distance.",
      weaponStats: {
        fireRate: 13.333,
        magazineSize: 30,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 0.75,
        reloadTimeSeconds: 2.25,
        firstBulletAccuracy: 0.4,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: "EWeaponStatsFeature::Silenced",
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.15,
          fireRate: 11.9997,
          runSpeedMultiplier: 0.76,
          burstCount: 1,
          firstBulletAccuracy: 0.25,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 20,
            headDamage: 78,
            bodyDamage: 26,
            legDamage: 22.1,
          },
          {
            rangeStartMeters: 20,
            rangeEndMeters: 50,
            headDamage: 66,
            bodyDamage: 22,
            legDamage: 18.7,
          },
        ],
      },
      shopData: {
        cost: 1600,
        category: "SMGs",
        categoryText: "SMGs",
        gridPosition: {
          row: 1,
          column: 2,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/SubMachineGuns/MP5/MP5WeaponPurchase",
      },
    },
    {
      uuid: "f7e1b454-4ad4-1063-ec0a-159e56b58941",
      displayName: "Stinger",
      category: "EEquippableCategory::SMG",
      displayIcon:
        "https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/killstreamicon.png",
      description:
        "This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility.The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.",
      weaponStats: {
        fireRate: 16,
        magazineSize: 20,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 0.75,
        reloadTimeSeconds: 2.25,
        firstBulletAccuracy: 0.65,
        shotgunPelletCount: 1,
        wallPenetration: "EWallPenetrationDisplayType::Low",
        feature: null,
        fireMode: null,
        altFireType: "EWeaponAltFireDisplayType::ADS",
        adsStats: {
          zoomMultiplier: 1.15,
          fireRate: 8.470589,
          runSpeedMultiplier: 0.76,
          burstCount: 4,
          firstBulletAccuracy: 0.5,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 20,
            headDamage: 67.5,
            bodyDamage: 27,
            legDamage: 22.95,
          },
          {
            rangeStartMeters: 20,
            rangeEndMeters: 50,
            headDamage: 62.5,
            bodyDamage: 25,
            legDamage: 21.25,
          },
        ],
      },
      shopData: {
        cost: 950,
        category: "SMGs",
        categoryText: "SMGs",
        gridPosition: {
          row: 0,
          column: 1,
        },
        canBeTrashed: true,
        image: null,
        newImage:
          "https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/shop/newimage.png",
        newImage2: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/SubMachineGuns/Vector/VectorPurchase",
      },
    },
    {
      uuid: "2f59173c-4bed-b6c3-2191-dea9b58be9c7",
      displayName: "Tactical Knife",
      category: "EEquippableCategory::Melee",
      displayIcon:
        "https://media.valorant-api.com/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7/displayicon.png",
      killStreamIcon:
        "https://media.valorant-api.com/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7/killstreamicon.png",
      description:
        "When in doubt or out of bullets, hit them with this. Lets you run fast, destroy objects faster, or one-shot enemies in the back with alt. fire.",
      weaponStats: null,
      shopData: null,
    },
  ]);
});

app.get("/maps", (req, res) => {
  res.json([
    {
      uuid: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
      displayName: "Ascent",
      displayIcon:
        "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
      description:
        "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
      callouts: [
        {
          regionName: "Tree",
          superRegionName: "A",
          location: {
            x: 3980.9062,
            y: -5938.758,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "A",
          location: {
            x: 4489.032,
            y: -3014.0515,
          },
        },
        {
          regionName: "Main",
          superRegionName: "A",
          location: {
            x: 5321.6206,
            y: -4710.1274,
          },
        },
        {
          regionName: "Window",
          superRegionName: "A",
          location: {
            x: 4023.0244,
            y: -8180.692,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 6153.585,
            y: -6626.2114,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: 60,
            y: 50,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "B",
          location: {
            x: -1490.5864,
            y: -1389.9706,
          },
        },
        {
          regionName: "Main",
          superRegionName: "B",
          location: {
            x: -1983.6713,
            y: -5840.8125,
          },
        },
        {
          regionName: "Boat House",
          superRegionName: "B",
          location: {
            x: -4484.774,
            y: -7763.3584,
          },
        },
        {
          regionName: "Bottom",
          superRegionName: "Mid",
          location: {
            x: 1122.2262,
            y: -5951.704,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: -2344.065,
            y: -7548.511,
          },
        },
        {
          regionName: "Catwalk",
          superRegionName: "Mid",
          location: {
            x: 2315.7944,
            y: -4127.2554,
          },
        },
        {
          regionName: "Cubby",
          superRegionName: "Mid",
          location: {
            x: 3387.3167,
            y: -5129.764,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 1995.2354,
            y: -9744.923,
          },
        },
        {
          regionName: "Garden",
          superRegionName: "A",
          location: {
            x: 3773.6653,
            y: -7551.3535,
          },
        },
        {
          regionName: "Market",
          superRegionName: "Mid",
          location: {
            x: 1089.1044,
            y: -7363.1914,
          },
        },
        {
          regionName: "Courtyard",
          superRegionName: "Mid",
          location: {
            x: 1222.7029,
            y: -4586.6,
          },
        },
        {
          regionName: "Link",
          superRegionName: "Mid",
          location: {
            x: -632.0929,
            y: -4280.2573,
          },
        },
        {
          regionName: "Pizza",
          superRegionName: "Mid",
          location: {
            x: 1801.5667,
            y: -7262.1704,
          },
        },
        {
          regionName: "Rafters",
          superRegionName: "A",
          location: {
            x: 6129.893,
            y: -8210,
          },
        },
        {
          regionName: "Top",
          superRegionName: "Mid",
          location: {
            x: 2753.9297,
            y: -2129.6155,
          },
        },
        {
          regionName: "Wine",
          superRegionName: "A",
          location: {
            x: 7358.7407,
            y: -4689.2705,
          },
        },
      ],
    },
    {
      uuid: "d960549e-485c-e861-8d71-aa9d1aed12a2",
      displayName: "Split",
      displayIcon:
        "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
      description:
        "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.",
      callouts: [
        {
          regionName: "Back",
          superRegionName: "A",
          location: {
            x: 7345.049,
            y: -7858.0405,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "A",
          location: {
            x: 6814.217,
            y: -2457.7468,
          },
        },
        {
          regionName: "Main",
          superRegionName: "A",
          location: {
            x: 6279.9795,
            y: -4492.833,
          },
        },
        {
          regionName: "Rafters",
          superRegionName: "A",
          location: {
            x: 5434.726,
            y: -6258.442,
          },
        },
        {
          regionName: "Ramps",
          superRegionName: "A",
          location: {
            x: 4330,
            y: -4750,
          },
        },
        {
          regionName: "Screens",
          superRegionName: "A",
          location: {
            x: 5648.7144,
            y: -8868.611,
          },
        },
        {
          regionName: "Sewer",
          superRegionName: "A",
          location: {
            x: 4862.6064,
            y: -2367.2578,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 6588.6597,
            y: -6761.131,
          },
        },
        {
          regionName: "Tower",
          superRegionName: "A",
          location: {
            x: 4636.7925,
            y: -6748.2334,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: 1901.97,
            y: 59.588867,
          },
        },
        {
          regionName: "Alley",
          superRegionName: "B",
          location: {
            x: -1158.0048,
            y: -8066.301,
          },
        },
        {
          regionName: "Back",
          superRegionName: "B",
          location: {
            x: -3107.181,
            y: -7417.2607,
          },
        },
        {
          regionName: "Link",
          superRegionName: "B",
          location: {
            x: -27.670135,
            y: -2369.784,
          },
        },
        {
          regionName: "Garage",
          superRegionName: "B",
          location: {
            x: -2190.7827,
            y: -3848.0293,
          },
        },
        {
          regionName: "Rafters",
          superRegionName: "B",
          location: {
            x: -637.1397,
            y: -6070.6167,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: -2167.2456,
            y: -6264.7715,
          },
        },
        {
          regionName: "Stairs",
          superRegionName: "B",
          location: {
            x: 1061.493,
            y: -6760.976,
          },
        },
        {
          regionName: "Tower",
          superRegionName: "B",
          location: {
            x: 168.89589,
            y: -5290.194,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "B",
          location: {
            x: -1271.6421,
            y: -1983.6248,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 2142.3635,
            y: -8964.969,
          },
        },
        {
          regionName: "Bottom",
          superRegionName: "Mid",
          location: {
            x: 1922.6552,
            y: -2899.4626,
          },
        },
        {
          regionName: "Mail",
          superRegionName: "Mid",
          location: {
            x: 1155.3333,
            y: -4808.6436,
          },
        },
        {
          regionName: "Top",
          superRegionName: "Mid",
          location: {
            x: 2021.9575,
            y: -4596.936,
          },
        },
        {
          regionName: "Vent",
          superRegionName: "Mid",
          location: {
            x: 3155.1648,
            y: -5338.5215,
          },
        },
      ],
    },
    {
      uuid: "b529448b-4d60-346e-e89e-00a4c527a405",
      displayName: "Fracture",
      displayIcon:
        "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png",
      description:
        "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
      callouts: [
        {
          regionName: "Bridge",
          superRegionName: "Attacker Side",
          location: {
            x: 13204,
            y: -756,
          },
        },
        {
          regionName: "Bench",
          superRegionName: "B",
          location: {
            x: 11473,
            y: -2897,
          },
        },
        {
          regionName: "Arcade",
          superRegionName: "B",
          location: {
            x: 10181,
            y: -4179,
          },
        },
        {
          regionName: "Tower",
          superRegionName: "B",
          location: {
            x: 9155,
            y: -5601,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: 8178,
            y: -5942,
          },
        },
        {
          regionName: "Generator",
          superRegionName: "B",
          location: {
            x: 8362,
            y: -3380,
          },
        },
        {
          regionName: "Link",
          superRegionName: "B",
          location: {
            x: 9198,
            y: -2741,
          },
        },
        {
          regionName: "Canteen",
          superRegionName: "B",
          location: {
            x: 7111,
            y: -3138,
          },
        },
        {
          regionName: "Link",
          superRegionName: "A",
          location: {
            x: 8578,
            y: 1302,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 9156,
            y: -677,
          },
        },
        {
          regionName: "Main",
          superRegionName: "B",
          location: {
            x: 5967,
            y: -5343,
          },
        },
        {
          regionName: "Tree",
          superRegionName: "B",
          location: {
            x: 4965,
            y: -4109,
          },
        },
        {
          regionName: "Tunnel",
          superRegionName: "B",
          location: {
            x: 7402,
            y: -4058,
          },
        },
        {
          regionName: "Hall",
          superRegionName: "A",
          location: {
            x: 5063.5464,
            y: 2057.6648,
          },
        },
        {
          regionName: "Door",
          superRegionName: "A",
          location: {
            x: 5807.855,
            y: 1940.4603,
          },
        },
        {
          regionName: "Rope",
          superRegionName: "A",
          location: {
            x: 6638.828,
            y: 1052.6461,
          },
        },
        {
          regionName: "Main",
          superRegionName: "A",
          location: {
            x: 5878.792,
            y: 3450.9639,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 8125.7627,
            y: 3373.7861,
          },
        },
        {
          regionName: "Drop",
          superRegionName: "A",
          location: {
            x: 9306.803,
            y: 2826.1626,
          },
        },
        {
          regionName: "Dish",
          superRegionName: "A",
          location: {
            x: 11296.665,
            y: 2059.077,
          },
        },
        {
          regionName: "Gate",
          superRegionName: "A",
          location: {
            x: 12962,
            y: 1565,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: 4345.554,
            y: -948.4505,
          },
        },
      ],
    },
    {
      uuid: "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba",
      displayName: "Bind",
      displayIcon:
        "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
      description:
        "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
      callouts: [
        {
          regionName: "Exit",
          superRegionName: "A",
          location: {
            x: 5875.4106,
            y: 4924.497,
          },
        },
        {
          regionName: "Link",
          superRegionName: "A",
          location: {
            x: 6365.635,
            y: -1007.0208,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "A",
          location: {
            x: 6113.239,
            y: 3158.823,
          },
        },
        {
          regionName: "Short",
          superRegionName: "A",
          location: {
            x: 7983.3467,
            y: 803.96063,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 10747.902,
            y: 2664.4436,
          },
        },
        {
          regionName: "Teleporter",
          superRegionName: "A",
          location: {
            x: 9432.303,
            y: 489.8803,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: 161.64832,
            y: 77.51108,
          },
        },
        {
          regionName: "Exit",
          superRegionName: "B",
          location: {
            x: 8921.412,
            y: -1763.2295,
          },
        },
        {
          regionName: "Hall",
          superRegionName: "B",
          location: {
            x: 12981.879,
            y: -4941.7544,
          },
        },
        {
          regionName: "Link",
          superRegionName: "B",
          location: {
            x: 6361.57,
            y: -2621.1829,
          },
        },
        {
          regionName: "Fountain",
          superRegionName: "B",
          location: {
            x: 5737.1484,
            y: -5390.446,
          },
        },
        {
          regionName: "Long",
          superRegionName: "B",
          location: {
            x: 7666.669,
            y: -6512.8022,
          },
        },
        {
          regionName: "Short",
          superRegionName: "B",
          location: {
            x: 7424.1313,
            y: -3056.4531,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: 11108.108,
            y: -4831.4585,
          },
        },
        {
          regionName: "Teleporter",
          superRegionName: "B",
          location: {
            x: 9027.776,
            y: -7223.8066,
          },
        },
        {
          regionName: "Window",
          superRegionName: "B",
          location: {
            x: 8826.788,
            y: -4309.4116,
          },
        },
        {
          regionName: "Bath",
          superRegionName: "A",
          location: {
            x: 9106.541,
            y: 4449.6587,
          },
        },
        {
          regionName: "Cave",
          superRegionName: "Attacker Side",
          location: {
            x: 3920.3887,
            y: 256.94193,
          },
        },
        {
          regionName: "Cubby",
          superRegionName: "A",
          location: {
            x: 8605.168,
            y: 174.89832,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 14641.918,
            y: -1017.6743,
          },
        },
        {
          regionName: "Elbow",
          superRegionName: "B",
          location: {
            x: 11212.901,
            y: -7095.3335,
          },
        },
        {
          regionName: "Garden",
          superRegionName: "B",
          location: {
            x: 9144.103,
            y: -5598.1274,
          },
        },
        {
          regionName: "Lamps",
          superRegionName: "A",
          location: {
            x: 10649.471,
            y: 79.904434,
          },
        },
        {
          regionName: "Tower",
          superRegionName: "A",
          location: {
            x: 12872.583,
            y: 2556.7708,
          },
        },
      ],
    },
    {
      uuid: "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53",
      displayName: "Breeze",
      displayIcon:
        "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png",
      description:
        "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
      callouts: [
        {
          regionName: "Hall",
          superRegionName: "A",
          location: {
            x: 4825,
            y: 2550,
          },
        },
        {
          regionName: "Bridge",
          superRegionName: "A",
          location: {
            x: 8400,
            y: 3525,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 8900,
            y: 3525,
          },
        },
        {
          regionName: "Arches",
          superRegionName: "Defender Side",
          location: {
            x: 9400,
            y: -1300,
          },
        },
        {
          regionName: "Wood Doors",
          superRegionName: "Mid",
          location: {
            x: 4825,
            y: 2550,
          },
        },
        {
          regionName: "Pillar",
          superRegionName: "Mid",
          location: {
            x: 4175,
            y: 475,
          },
        },
        {
          regionName: "Top",
          superRegionName: "Mid",
          location: {
            x: 6175,
            y: 525,
          },
        },
        {
          regionName: "Nest",
          superRegionName: "Mid",
          location: {
            x: 8650,
            y: 275,
          },
        },
        {
          regionName: "Window",
          superRegionName: "B",
          location: {
            x: 2225,
            y: -4175,
          },
        },
        {
          regionName: "Main",
          superRegionName: "B",
          location: {
            x: 3550,
            y: -4450,
          },
        },
        {
          regionName: "Snake",
          superRegionName: "Attacker Side",
          location: {
            x: 550,
            y: -2450,
          },
        },
        {
          regionName: "Elbow",
          superRegionName: "B",
          location: {
            x: 4675,
            y: -2900,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: 6450,
            y: -5650,
          },
        },
        {
          regionName: "Tunnel",
          superRegionName: "B",
          location: {
            x: 6450,
            y: -1450,
          },
        },
        {
          regionName: "Stack",
          superRegionName: "Mid",
          location: {
            x: 5150,
            y: -1325,
          },
        },
        {
          regionName: "Switch",
          superRegionName: "A",
          location: {
            x: 6425,
            y: 3050,
          },
        },
        {
          regionName: "Chute",
          superRegionName: "Mid",
          location: {
            x: 3875,
            y: 1800,
          },
        },
        {
          regionName: "Back",
          superRegionName: "B",
          location: {
            x: 7550,
            y: -5675,
          },
        },
        {
          regionName: "Wall",
          superRegionName: "B",
          location: {
            x: 8550,
            y: -3000,
          },
        },
        {
          regionName: "Rope",
          superRegionName: "A",
          location: {
            x: 3100,
            y: 2550,
          },
        },
        {
          regionName: "Cannon",
          superRegionName: "Mid",
          location: {
            x: 2900,
            y: -1850,
          },
        },
        {
          regionName: "Metal Doors",
          superRegionName: "A",
          location: {
            x: 6825,
            y: 2550,
          },
        },
        {
          regionName: "Bottom",
          superRegionName: "Mid",
          location: {
            x: 1575,
            y: 475,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "A",
          location: {
            x: -1250,
            y: 3400,
          },
        },
        {
          regionName: "Cave",
          superRegionName: "A",
          location: {
            x: 100,
            y: 8375,
          },
        },
        {
          regionName: "Shop",
          superRegionName: "A",
          location: {
            x: 2150,
            y: 4250,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 4825,
            y: 6325,
          },
        },
        {
          regionName: "Pyramids",
          superRegionName: "A",
          location: {
            x: 5200,
            y: 5450,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: -575,
            y: -450,
          },
        },
      ],
    },
    {
      uuid: "e2ad5c54-4114-a870-9641-8ea21279579a",
      displayName: "Icebox",
      displayIcon:
        "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png",
      description:
        "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
      callouts: [
        {
          regionName: "Garage",
          superRegionName: "B",
          location: {
            x: -1250,
            y: -1425,
          },
        },
        {
          regionName: "Belt",
          superRegionName: "A",
          location: {
            x: -7200,
            y: -850,
          },
        },
        {
          regionName: "Nest",
          superRegionName: "A",
          location: {
            x: -6650,
            y: 900,
          },
        },
        {
          regionName: "Pipes",
          superRegionName: "A",
          location: {
            x: -6150,
            y: 450,
          },
        },
        {
          regionName: "Rafters",
          superRegionName: "A",
          location: {
            x: -6450,
            y: 4250,
          },
        },
        {
          regionName: "Screen",
          superRegionName: "A",
          location: {
            x: -5100,
            y: 3325,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: -6400,
            y: 3200,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: -3925,
            y: -4450,
          },
        },
        {
          regionName: "Yellow",
          superRegionName: "B",
          location: {
            x: 2050,
            y: -25,
          },
        },
        {
          regionName: "Back",
          superRegionName: "B",
          location: {
            x: 251,
            y: 4269,
          },
        },
        {
          regionName: "Fence",
          superRegionName: "B",
          location: {
            x: 251.00003,
            y: 3236.0525,
          },
        },
        {
          regionName: "Cubby",
          superRegionName: "B",
          location: {
            x: 1050,
            y: -975,
          },
        },
        {
          regionName: "Green",
          superRegionName: "B",
          location: {
            x: -450,
            y: -700,
          },
        },
        {
          regionName: "Hall",
          superRegionName: "B",
          location: {
            x: 300,
            y: 3050,
          },
        },
        {
          regionName: "Hut",
          superRegionName: "B",
          location: {
            x: -1425,
            y: 4400,
          },
        },
        {
          regionName: "Kitchen",
          superRegionName: "B",
          location: {
            x: -2221.3618,
            y: 3403.649,
          },
        },
        {
          regionName: "Orange",
          superRegionName: "B",
          location: {
            x: -632,
            y: 1700,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: 1725,
            y: 2575,
          },
        },
        {
          regionName: "Snowman",
          superRegionName: "B",
          location: {
            x: 2250,
            y: 3960.3218,
          },
        },
        {
          regionName: "Snow Pile",
          superRegionName: "B",
          location: {
            x: -1775,
            y: 2500,
          },
        },
        {
          regionName: "Tube",
          superRegionName: "B",
          location: {
            x: -2300,
            y: 1275,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: -3750,
            y: 7075,
          },
        },
        {
          regionName: "Blue",
          superRegionName: "Mid",
          location: {
            x: -2825,
            y: 975,
          },
        },
        {
          regionName: "Boiler",
          superRegionName: "Mid",
          location: {
            x: -3375,
            y: 2925,
          },
        },
        {
          regionName: "Pallet",
          superRegionName: "Mid",
          location: {
            x: -4450,
            y: 1775,
          },
        },
        {
          regionName: "Fence",
          superRegionName: "B",
          location: {
            x: 363,
            y: 3595,
          },
        },
      ],
    },
    {
      uuid: "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047",
      displayName: "Haven",
      displayIcon:
        "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/displayicon.png",
      listViewIcon:
        "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/listviewicon.png",
      splash:
        "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png",
      description:
        "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
      callouts: [
        {
          regionName: "Garden",
          superRegionName: "A",
          location: {
            x: 3100.261,
            y: -4683.6016,
          },
        },
        {
          regionName: "Link",
          superRegionName: "A",
          location: {
            x: 4244.4214,
            y: -10715.68,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "A",
          location: {
            x: 3438.537,
            y: -6260.409,
          },
        },
        {
          regionName: "Long",
          superRegionName: "A",
          location: {
            x: 6209.695,
            y: -6901.142,
          },
        },
        {
          regionName: "Sewer",
          superRegionName: "A",
          location: {
            x: 3452.8735,
            y: -7915.7246,
          },
        },
        {
          regionName: "Site",
          superRegionName: "A",
          location: {
            x: 6309.3076,
            y: -9225.703,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Attacker Side",
          location: {
            x: 1741.7622,
            y: -2642.7925,
          },
        },
        {
          regionName: "Back",
          superRegionName: "B",
          location: {
            x: 1966.1608,
            y: -10664.775,
          },
        },
        {
          regionName: "Site",
          superRegionName: "B",
          location: {
            x: 1884.706,
            y: -9231.335,
          },
        },
        {
          regionName: "Link",
          superRegionName: "C",
          location: {
            x: -87.761444,
            y: -10004.415,
          },
        },
        {
          regionName: "Lobby",
          superRegionName: "C",
          location: {
            x: -1642.189,
            y: -5720.345,
          },
        },
        {
          regionName: "Long",
          superRegionName: "C",
          location: {
            x: -3356.814,
            y: -5990.872,
          },
        },
        {
          regionName: "Garage",
          superRegionName: "C",
          location: {
            x: 180.07678,
            y: -7999.5845,
          },
        },
        {
          regionName: "Window",
          superRegionName: "C",
          location: {
            x: -10.126678,
            y: -8993.241,
          },
        },
        {
          regionName: "Site",
          superRegionName: "C",
          location: {
            x: -2378.1328,
            y: -9010.557,
          },
        },
        {
          regionName: "Cubby",
          superRegionName: "C",
          location: {
            x: -2119.7693,
            y: -6561.603,
          },
        },
        {
          regionName: "Spawn",
          superRegionName: "Defender Side",
          location: {
            x: 2946.3042,
            y: -12714.707,
          },
        },
        {
          regionName: "Doors",
          superRegionName: "Mid",
          location: {
            x: 151.11594,
            y: -6262.9155,
          },
        },
        {
          regionName: "Courtyard",
          superRegionName: "Mid",
          location: {
            x: 1822.1299,
            y: -6712.6875,
          },
        },
        {
          regionName: "Window",
          superRegionName: "Mid",
          location: {
            x: 1950.2218,
            y: -5567.912,
          },
        },
        {
          regionName: "Tower",
          superRegionName: "A",
          location: {
            x: 6721.4043,
            y: -10472.5205,
          },
        },
      ],
    },
  ]);
});

app.listen(PORT, () => {
  console.log("Escutando na porta" + PORT);
});
