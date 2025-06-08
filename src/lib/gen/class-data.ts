
import { type CharacterClass } from '$lib/classes';
// Auto generated data
export const Classes: { [key: string]: CharacterClass } = {
  "bard": {
    "id": "bard",
    "name": "Bard",
    "description": "Bards are the most charismatic people in all the realms. Members of this class are masters of captivation and specialize in a variety of performance types, including singing, playing musical instruments, weaving tales, or telling jokes. Whether performing for an audience or speaking to an individual, bards thrive in social situations. Members of this profession bond and train at schools or guilds, but a current of egotism runs through those of the bardic persuasion. While they may be the most likely class to bring people together, a bard of ill temper can just as easily tear a party apart.",
    "starting_evasion": 10,
    "starting_hit_points": 5,
    "class_items": [
      "A romance novel",
      "A letter never opened"
    ],
    "class_features": [
      {
        "name": "Rally",
        "feature": "Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At the end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8."
      }
    ],
    "hope_feature": {
      "name": "Make a Scene",
      "feature": "Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty."
    },
    "subclasses": [
      {
        "name": "Troubadour",
        "description": "Play the Troubadour if you want to play music to bolster your allies.",
        "spellcast_trait": "Presence",
        "foundation_features": [
          {
            "name": "Gifted Performer",
            "feature": "You can play three different types of songs, once each per long rest; describe how you perform for others to gain the listed benefit:\n- Relaxing Song: You and all allies within Close range clear a Hit Point.\n- Epic Song: Make a target within Close range temporarily Vulnerable.\n- Heartbreaking Song: You and all allies within Close range gain a Hope."
          }
        ],
        "specialization_features": [
          {
            "name": "Maestro",
            "feature": "Your rallying songs steel the courage of those who listen. When you give a Rally Die to an ally, they can gain a Hope or clear a Stress."
          }
        ],
        "mastery_features": [
          {
            "name": "Virtuoso",
            "feature": "You are among the greatest of your craft and your skill is boundless. You can perform each of your “Gifted Performer” feature’s songs twice per long rest."
          }
        ]
      },
      {
        "name": "Wordsmith",
        "description": "Play the Wordsmith if you want to use clever wordplay and captivate crowds.",
        "spellcast_trait": "Presence",
        "foundation_features": [
          {
            "name": "Rousing Speech",
            "feature": "Once per long rest, you can give a heartfelt, inspiring speech. All allies within Far range clear 2 Stress."
          },
          {
            "name": "Heart of a Poet",
            "feature": "After you make an action roll to impress, persuade, or offend someone, you can spend a Hope to add a d4 to the roll."
          }
        ],
        "specialization_features": [
          {
            "name": "Eloquent",
            "feature": "Your moving words boost morale. Once per session, when you encourage an ally, you can do one of the following:\n- Allow them to find a mundane object or tool they need.\n- Help an Ally without spending Hope.\n- Give them an additional downtime move during their next rest."
          }
        ],
        "mastery_features": [
          {
            "name": "Epic Poetry",
            "feature": "Your Rally Die increases to a d10. Additionally, when you Help an Ally, you can narrate the moment as if you were writing the tale of their heroism in a memoir. When you do, roll a d10 as your advantage die."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "grace",
        "name": "Grace",
        "description": "Grace is the domain of charisma. Through rapturous storytelling, charming spells, or a shroud of lies, those who channel this power define the realities of their adversaries, bending perception to their will. Grace offers its wielders raw magnetism and mastery over language.",
        "cards": [
          {
            "id": "deft-deceiver",
            "name": "DEFT DECEIVER",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Spend a Hope to gain advantage on a roll to deceive or trick someone into believing a lie you tell them."
          },
          {
            "id": "enrapture",
            "name": "ENRAPTURE",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, they become temporarily Enraptured. While Enraptured, a target’s attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Once per rest on a success, you can mark a Stress to force the Enraptured target to mark a Stress as well."
          },
          {
            "id": "inspirational-words",
            "name": "INSPIRATIONAL WORDS",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Your speech is imbued with power. After a long rest, place a number of tokens on this card equal to your Presence. When you speak with an ally, you can spend a token from this card to give them one benefit from the following options:\n  Your ally clears a Stress.\n  Your ally clears a Hit Point.\n  Your ally gains a Hope.\nWhen you take a long rest, clear all unspent tokens."
          },
          {
            "id": "tell-no-lies",
            "name": "TELL NO LIES",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Very Close range. On a success, they can’t lie to you while they remain within Close range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they must mark a Stress and the effect ends. The target is typically unaware this spell has been cast on them until it causes them to utter the truth."
          },
          {
            "id": "troublemaker",
            "name": "TROUBLEMAKER",
            "level": 2,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you taunt or provoke a target within Far range, make a Presence Roll against them. Once per rest on a success, roll a number of d4s equal to your Proficiency. The target must mark Stress equal to the highest result rolled."
          },
          {
            "id": "hypnotic-shimmer",
            "name": "HYPNOTIC SHIMMER",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries in front of you within Close range. Once per rest on a success, create an illusion of flashing colors and lights that temporarily Stuns targets you succeed against and forces them to mark a Stress. While Stunned, they can’t use reactions and can’t take any other actions until they clear this condition."
          },
          {
            "id": "invisibility",
            "name": "INVISIBILITY",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (10). On a success, mark a Stress and choose yourself or an ally within Melee range to become Invisible. An Invisible creature can’t be seen except through magical means and attack rolls against them are made with disadvantage. Place a number of tokens on this card equal to your Spellcast trait. When the Invisible creature takes an action, spend a token from this card. After the action that spends the last token is resolved, the effect ends.\nYou can only hold Invisibility on one creature at a time."
          },
          {
            "id": "soothing-speech",
            "name": "SOOTHING SPEECH",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "During a short rest, when you take the time to comfort another character while using the Tend to Wounds downtime move on them, clear an additional Hit Point on that character. When you do, you also clear 2 Hit Points."
          },
          {
            "id": "through-your-eyes",
            "name": "THROUGH YOUR EYES",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Choose a target within Very Far range. You can see through their eyes and hear through their ears. You can transition between using your own senses or the target’s freely until you cast another spell or until your next rest."
          },
          {
            "id": "thought-delver",
            "name": "THOUGHT DELVER",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can peek into the minds of others. Spend a Hope to read the vague surface thoughts of a target within Far range. Make a Spellcast Roll against the target to delve for deeper, more hidden thoughts.\nOn a roll with Fear, the target might, at the GM’s discretion, become aware that you’re reading their thoughts."
          },
          {
            "id": "words-of-discord",
            "name": "WORDS OF DISCORD",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Whisper words of discord to an adversary within Melee range and make a Spellcast Roll (13). On a success, the target must mark a Stress and make an attack against another adversary instead of against you or your allies. Once this attack is over, the target realizes what happened. The next time you cast Words of Discord on them, gain a −5 penalty to the Spellcast Roll."
          },
          {
            "id": "never-upstaged",
            "name": "NEVER UPSTAGED",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you mark 1 or more Hit Points from an attack, you can mark a Stress to place a number of tokens equal to the number of Hit Points you marked on this card. On your next successful attack, gain a +5 bonus to your damage roll for each token on this card, then clear all tokens."
          },
          {
            "id": "share-the-burden",
            "name": "SHARE THE BURDEN",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per rest, take on the Stress from a willing creature within Melee range. The target describes what intimate knowledge or emotions telepathically leak from their mind in this moment between you. Transfer any number of their marked Stress to you, then gain a Hope for each Stress transferred."
          },
          {
            "id": "endless-charisma",
            "name": "ENDLESS CHARISMA",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After you make an action roll to persuade, lie, or garner favor, you can spend a Hope to reroll the Hope or Fear Die."
          },
          {
            "id": "grace-touched",
            "name": "GRACE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Grace domain, gain the following benefits:\n  You can mark an Armor Slot instead of marking a Stress.\n  When you would force a target to mark a number of Hit Points, you can choose instead to force them to mark that number of Stress."
          },
          {
            "id": "astral-projection",
            "name": "ASTRAL PROJECTION",
            "level": 8,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per long rest, mark a Stress to create a projected copy of yourself that can appear anywhere you’ve been before.\nYou can see and hear through the projection as though it were you and affect the world as though you were there. A creature investigating the projection can tell it’s of magical origin. This effect lasts until your next rest or your projection takes any damage."
          },
          {
            "id": "mass-enrapture",
            "name": "MASS ENRAPTURE",
            "level": 8,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all targets within Far range. Targets you succeed against become temporarily Enraptured. While Enraptured, a target’s attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Mark a Stress to force all Enraptured targets to mark a Stress, ending this spell."
          },
          {
            "id": "copycat",
            "name": "COPYCAT",
            "level": 9,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "Once per long rest, this card can mimic the features of another domain card of level 8 or lower in another player’s loadout. Spend Hope equal to half the card’s level to gain access to the feature. It lasts until your next rest or they place the card in their vault."
          },
          {
            "id": "master-of-the-craft",
            "name": "MASTER OF THE CRAFT",
            "level": 9,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Gain a permanent +2 bonus to two of your Experiences or a permanent +3 bonus to one of your Experiences. Then place this card in your vault permanently."
          },
          {
            "id": "encore",
            "name": "ENCORE",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When an ally within Close range deals damage to an adversary, you can make a Spellcast Roll against that same target. On a success, you deal the same damage to the target that your ally dealt. If your Spellcast Roll succeeds with Fear, place this card in your vault."
          },
          {
            "id": "notorious",
            "name": "NOTORIOUS",
            "level": 10,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "People know who you are and what you’ve done, and they treat you differently because of it. When you leverage your notoriety to get what you want, you can mark a Stress before you roll to gain a +10 bonus to the result. Your food and drinks are always free wherever you go, and everything else you buy is reduced in price by one bag of gold (to a minimum of one handful).\nThis card doesn’t count against your loadout’s domain card maximum of 5 and can’t be placed in your vault."
          }
        ]
      },
      {
        "id": "codex",
        "name": "Codex",
        "description": "Codex is the domain of intensive magical study. Those who seek magical knowledge turn to the equations of power recorded in books, written on scrolls, etched into walls, or tattooed on bodies. Codex offers a commanding and versatile understanding of magic to devotees who pursue knowledge beyond the boundaries of common wisdom.",
        "cards": [
          {
            "id": "book-of-ava",
            "name": "BOOK OF AVA",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Power Push: Make a Spellcast Roll against a target within Melee range. On a success, they’re knocked back to Far range and take d10+2 magic damage using your Proficiency.\nTava’s Armor: Spend a Hope to give a target you can touch a +1 bonus to their Armor Score until their next rest or you cast Tava’s Armor again.\nIce Spike: Make a Spellcast Roll (12) to summon a large ice spike within Far range. If you use it as a weapon, make the Spellcast Roll against the target’s Difficulty instead. On a success, deal d6 physical damage using your Proficiency."
          },
          {
            "id": "book-of-illiat",
            "name": "BOOK OF ILLIAT",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Slumber: Make a Spellcast Roll against a target within Very Close range. On a success, they’re Asleep until they take damage or the GM spends a Fear on their turn to clear this condition. Arcane Barrage: Once per rest, spend any number of Hope and shoot magical projectiles that strike a target of your choice within Close range. Roll a number of d6s equal to the Hope spent and deal that much magic damage to the target. Telepathy: Spend a Hope to open a line of mental communication with one target you can see. This connection lasts until your next rest or you cast Telepathy again."
          },
          {
            "id": "book-of-tyfar",
            "name": "BOOK OF TYFAR",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Wild Flame: Make a Spellcast Roll against up to three adversaries within Melee range. Targets you succeed against take 2d6 magic damage and must mark a Stress as flames erupt from your hand. Magic Hand: You conjure a magical hand with the same size and strength as your own within Far range. Mysterious Mist: Make a Spellcast Roll (13) to cast a temporary thick fog that gathers in a stationary area within Very Close range. The fog heavily obscures this area and everything in it."
          },
          {
            "id": "book-of-sitil",
            "name": "BOOK OF SITIL",
            "level": 2,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Adjust Appearance: You magically shift your appearance and clothing to avoid recognition.\nParallela: Spend 2 Hope to cast this spell on yourself or an ally within Close range. The next time the target makes an attack, they can hit an additional target within range that their attack roll would succeed against. You can only hold this spell on one creature at a time.\nIllusion: Make a Spellcast Roll (14). On a success, create a temporary visual illusion no larger than you within Close range that lasts for as long as you look at it. It holds up to scrutiny until an observer is within Melee range."
          },
          {
            "id": "book-of-vagras",
            "name": "BOOK OF VAGRAS",
            "level": 2,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Runic Lock: Make a Spellcast Roll (15) on an object you’re touching that can close (such as a lock, chest, or box). Once per rest on a success, you can lock the object so it can only be opened by creatures of your choice. Someone with access to magic and an hour of time to study the spell can break it.\nArcane Door: When you have no adversaries within Melee range, make a Spellcast Roll (13). On a success, spend a Hope to create a portal from where you are to a point within Far range you can see. It closes once a creature has passed through it.\nReveal: Make a Spellcast Roll. If there is anything magically hidden within Close range, it is revealed."
          },
          {
            "id": "book-of-korvax",
            "name": "BOOK OF KORVAX",
            "level": 3,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Levitation: Make a Spellcast Roll to temporarily lift a target you can see up into the air and move them within Close range of their original position. Recant: Spend a Hope to force a target within Melee range to make a Reaction Roll (15). On a failure, they forget the last minute of your conversation. Rune Circle: Mark a Stress to create a temporary magical circle on the ground where you stand. All adversaries within Melee range, or who enter Melee range, take 2d12+4 magic damage and are knocked back to Very Close range."
          },
          {
            "id": "book-of-norai",
            "name": "BOOK OF NORAI",
            "level": 3,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Mystic Tether: Make a Spellcast Roll against a target within Far range. On a success, they’re temporarily Restrained and must mark a Stress. If you target a flying creature, this spell grounds and temporarily Restrains them. Fireball: Make a Spellcast Roll against a target within Very Far range. On a success, hurl a sphere of fire toward them that explodes on impact. The target and all creatures within Very Close range of them must make a Reaction Roll (13). Targets who fail take d20+5 magic damage using your Proficiency. Targets who succeed take half damage."
          },
          {
            "id": "book-of-exota",
            "name": "BOOK OF EXOTA",
            "level": 4,
            "recall_cost": 3,
            "type": "Grimoire",
            "feature": "Repudiate: You can interrupt a magical effect taking place. Make a reaction roll using your Spellcast trait. Once per rest on a success, the effect stops and any consequences are avoided.\nCreate Construct: Spend a Hope to choose a group of objects around you and create an animated construct from them that obeys basic commands. Make a Spellcast Roll to command them to take action. When necessary, they share your Evasion and traits and their attacks deal 2d10+3 physical damage. You can only maintain one construct at a time, and they fall apart when they take any amount of damage."
          },
          {
            "id": "book-of-grynn",
            "name": "BOOK OF GRYNN",
            "level": 4,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Arcane Deflection: Once per long rest, spend a Hope to negate the damage of an attack targeting you or an ally within Very Close range.\nTime Lock: Target an object within Far range. That object stops in time and space exactly where it is until your next rest. If a creature tries to move it, make a Spellcast Roll against them to maintain this spell.\nWall of Flame: Make a Spellcast Roll (15). On a success, create a a wall of magical flame between two points within Far range. All creatures in its path must choose a side to be on, and anything that subsequently passes through the wall takes 4d10+3 magic damage."
          },
          {
            "id": "manifest-wall",
            "name": "MANIFEST WALL",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). Once per rest on a success, spend a Hope to create a temporary magical wall between two points within Far range. It can be up to 50 feet high and form at any angle. Creatures or objects in its path are shunted to a side of your choice. The wall stays up until your next rest or you cast Manifest Wall again."
          },
          {
            "id": "teleport",
            "name": "TELEPORT",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, you can instantly teleport yourself and any number of willing targets within Close range to a place you’ve been before. Choose one of the following options, then make a Spellcast Roll (16):\n  If you know the place very well, gain a +3 bonus.\n  If you’ve visited the place frequently, gain a +1 bonus.\n  If you’ve visited the place infrequently, gain no modifier.\n  If you’ve only been there once, gain a −2 penalty. On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure determining how far off course."
          },
          {
            "id": "banish",
            "name": "BANISH",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, roll a number of d20s equal to your Spellcast trait. The target must make a reaction roll with a Difficulty equal to your highest result. On a success, the target must mark a Stress but isn’t banished. Once per rest on a failure, they are banished from this realm.\nWhen the PCs roll with Fear, the Difficulty gains a −1 penalty and the target makes another reaction roll. On a success, they return from banishment."
          },
          {
            "id": "sigil-of-retribution",
            "name": "SIGIL OF RETRIBUTION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark an adversary within Close range with a sigil of retribution. The GM gains a Fear. When the marked adversary deals damage to you or your allies, place a d8 on this card. You can hold a number of d8s equal to your level. When you successfully attack the marked adversary, roll the dice on this card and add the total to your damage roll, then clear the dice. This effect ends when the marked adversary is defeated or you cast Sigil of Retribution again."
          },
          {
            "id": "book-of-homet",
            "name": "BOOK OF HOMET",
            "level": 7,
            "recall_cost": 0,
            "type": "Grimoire",
            "feature": "Pass Through: Make a Spellcast Roll (13). Once per rest on a success, you and all creatures touching you can pass through a wall or door within Close range. The effect ends once everyone is on the other side.\nPlane Gate: Make a Spellcast Roll (14). Once per long rest on a success, open a gateway to a location in another dimension or plane of existence you’ve been to before. This gateway lasts until your next rest."
          },
          {
            "id": "codex-touched",
            "name": "CODEX-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Codex domain, gain the following benefits:\n  You can mark a Stress to add your Proficiency to a Spellcast Roll.\n  Once per rest, replace this card with any card from your vault without paying its Recall Cost."
          },
          {
            "id": "book-of-vyola",
            "name": "BOOK OF VYOLA",
            "level": 8,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Memory Delve: Make a Spellcast Roll against a target within Far range. On a success, peer into the target’s mind and ask the GM a question. The GM describes any memories the target has pertaining to the answer. Shared Clarity: Once per long rest, spend a Hope to choose two willing creatures. When one of them would mark Stress, they can choose between the two of them who marks it. This spell lasts until their next rest."
          },
          {
            "id": "safe-haven",
            "name": "SAFE HAVEN",
            "level": 8,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "When you have a few minutes of calm to focus, you can spend 2 Hope to summon your Safe Haven, a large interdimensional home where you and your allies can take shelter. When you do, a magical door appears somewhere within Close range. Only creatures of your choice can enter. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.\nWhen you take a rest within your own Safe Haven, you can choose an additional downtime move."
          },
          {
            "id": "book-of-ronin",
            "name": "BOOK OF RONIN",
            "level": 9,
            "recall_cost": 4,
            "type": "Grimoire",
            "feature": "Transform: Make a Spellcast Roll (15). On a success, transform into an inanimate object no larger than twice your normal size. You can remain in this shape until you take damage.\nEternal Enervation: Once per long rest, make a Spellcast Roll against a target within Close range. On a success, they become permanently Vulnerable. They can’t clear this condition by any means."
          },
          {
            "id": "disintegration-wave",
            "name": "DISINTEGRATION WAVE",
            "level": 9,
            "recall_cost": 4,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (18). Once per long rest on a success, the GM tells you which adversaries within Far range have a Difficulty of 18 or lower. Mark a Stress for each one you wish to hit with this spell. They are killed and can’t come back to life by any means."
          },
          {
            "id": "book-of-yarrow",
            "name": "BOOK OF YARROW",
            "level": 10,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Timejammer: Make a Spellcast Roll (18). On a success, time temporarily slows to a halt for everyone within Far range except for you. It resumes the next time you make an action roll that targets another creature."
          },
          {
            "id": "magic-immunity",
            "name": "MAGIC IMMUNITY",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Spend 5 Hope to become immune to magic damage until your next rest."
          },
          {
            "id": "transcendent-union",
            "name": "TRANSCENDENT UNION",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per long rest, spend 5 Hope to cast this spell on two or more willing creatures. Until your next rest, when a creature connected by this union would mark Stress or Hit Points, the connected creatures can choose who marks it."
          }
        ]
      }
    ],
    "background_questions": [
      "Who from your community taught you to have such confidence in yourself?",
      "You were in love once. Who did you adore, and how did they hurt you?",
      "You’ve always looked up to another bard. Who are they, and why do you idolize them?"
    ],
    "connections": [
      "What made you realize we were going to be such good friends?",
      "What do I do that annoys you?",
      "Why do you grab my hand at night?"
    ]
  },
  "druid": {
    "id": "druid",
    "name": "Druid",
    "description": "Becoming a druid is more than an occupation; it’s a calling for those who wish to learn from and protect the magic of the wilderness. While one might underestimate a gentle druid who practices the often-quiet work of cultivating flora, druids who channel the untamed forces of nature are terrifying to behold. Druids cultivate their abilities in small groups, often connected by a specific ethos or locale, but some choose to work alone. Through years of study and dedication, druids can learn to transform into beasts and shape nature itself.",
    "starting_evasion": 10,
    "starting_hit_points": 6,
    "class_items": [
      "A small bag of rocks and bones",
      "A strange pendant found in the dirt"
    ],
    "class_features": [
      {
        "name": "Beastform",
        "feature": "Mark a Stress to magically transform into a creature of your tier or lower from the Beastform list. You can drop out of this form at any time. While transformed, you can’t use weapons or cast spells from domain cards, but you can still use other features or abilities you have access to. Spells you cast before you transform stay active and last for their normal duration, and you can talk and communicate as normal. Additionally, you gain the Beastform’s features, add their Evasion bonus to your Evasion, and use the trait specified in their statistics for your attack. While you’re in a Beastform, your armor becomes part of your body and you mark Armor Slots as usual; when you drop out of a Beastform, those marked Armor Slots remain marked. If you mark your last Hit Point, you automatically drop out of this form."
      },
      {
        "name": "Wildtouch",
        "feature": "You can perform harmless, subtle effects that involve nature—such as causing a flower to rapidly grow, summoning a slight gust of wind, or starting a campfire— at will."
      }
    ],
    "hope_feature": {
      "name": "Evolution",
      "feature": "Spend 3 Hope to transform into a Beastform without marking a Stress. When you do, choose one trait to raise by +1 until you drop out of that Beastform."
    },
    "subclasses": [
      {
        "name": "Warden of the Elements",
        "description": "Play the Warden of the Elements if you want to embody the natural elements of the wild.",
        "spellcast_trait": "Instinct",
        "foundation_features": [
          {
            "name": "Elemental Incarnation",
            "feature": "Mark a Stress to Channel one of the following elements until you take Severe damage or until your next rest:\n- Fire: When an adversary within Melee range deals damage to you, they take 1d10 magic damage.\n- Earth: Gain a bonus to your damage thresholds equal to your Proficiency.\n- Water: When you deal damage to an adversary within Melee range, all other adversaries within Very Close range must mark a Stress.\n- Air: You can hover, gaining advantage on Agility Rolls."
          }
        ],
        "specialization_features": [
          {
            "name": "Elemental Aura",
            "feature": "Once per rest while Channeling, you can assume an aura matching your element. The aura affects targets within Close range until your Channeling ends.\n- Fire: When an adversary marks 1 or more Hit Points, they must also mark a Stress.\n- Earth: Your allies gain a +1 bonus to Strength.\n- Water: When an adversary deals damage to you, you can mark a Stress to move them anywhere within Very Close range of where they are.\n- Air: When you or an ally takes damage from an attack beyond Melee range, reduce the damage by 1d8."
          }
        ],
        "mastery_features": [
          {
            "name": "Elemental Dominion",
            "feature": "You further embody your element. While Channeling, you gain the following benefit:\n- Fire: You gain a +1 bonus to your Proficiency for attacks and spells that deal damage.\n- Earth: When you would mark Hit Points, roll a d6 per Hit Point marked. For each result of 6, reduce the number of Hit Points you mark by 1.\n- Water: When an attack against you succeeds, you can mark a Stress to make the attacker temporarily Vulnerable.\n- Air: You gain a +1 bonus to your Evasion and can fly."
          }
        ]
      },
      {
        "name": "Warden of Renewal",
        "description": "Play the Warden of Renewal if you want to use powerful magic to heal your party.",
        "spellcast_trait": "Instinct",
        "foundation_features": [
          {
            "name": "Clarity of Nature",
            "feature": "Once per long rest, you can create a space of natural serenity within Close range. When you spend a few minutes resting within the space, clear Stress equal to your Instinct, distributed as you choose between you and your allies."
          },
          {
            "name": "Regeneration",
            "feature": "Touch a creature and spend 3 Hope. That creature clears 1d4 Hit Points."
          }
        ],
        "specialization_features": [
          {
            "name": "Regenerative Reach",
            "feature": "You can target creatures within Very Close range with your “Regeneration” feature."
          },
          {
            "name": "Warden’s Protection",
            "feature": "Once per long rest, spend 2 Hope to clear 2 Hit Points on 1d4 allies within Close range."
          }
        ],
        "mastery_features": [
          {
            "name": "Defender",
            "feature": "Your animal transformation embodies a healing guardian spirit. When you’re in Beastform and an ally within Close range marks 2 or more Hit Points, you can mark a Stress to reduce the number of Hit Points they mark by 1."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "sage",
        "name": "Sage",
        "description": "Sage is the domain of the natural world. Those who walk this path tap into the unfettered power of the earth and its creatures to unleash raw magic. Sage grants its adherents the vitality of a blooming flower and the ferocity of a ravenous predator.",
        "cards": [
          {
            "id": "gifted-tracker",
            "name": "GIFTED TRACKER",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you’re tracking a specific creature or group of creatures based on signs of their passage, you can spend any number of Hope and ask the GM that many questions from the following list.\n  What direction did they go?\n  How long ago did they pass through?\n  What were they doing in this location?\n  How many of them were here?\nWhen you encounter creatures you’ve tracked in this way, gain a +1 bonus to your Evasion against them."
          },
          {
            "id": "nature’s-tongue",
            "name": "NATURE’S TONGUE",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "You can speak the language of the natural world. When you want to speak to the plants and animals around you, make an Instinct Roll (12). On a success, they’ll give you the information they know. On a roll with Fear, their knowledge might be limited or come at a cost. Additionally, before you make a Spellcast Roll while within a natural environment, you can spend a Hope to gain a +2 bonus to the roll."
          },
          {
            "id": "vicious-entangle",
            "name": "VICIOUS ENTANGLE",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, roots and vines reach out from the ground, dealing 1d8+1 physical damage and temporarily Restraining the target. Additionally on a success, you can spend a Hope to temporarily Restrain another adversary within Very Close range of your target."
          },
          {
            "id": "conjure-swarm",
            "name": "CONJURE SWARM",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Tekaira Armored Beetles: Mark a Stress to conjure armored beetles that encircle you. When you next take damage, reduce the severity by one threshold. You can spend a Hope to keep the beetles conjured after taking damage. Fire Flies: Make a Spellcast Roll against all adversaries within Close range. Spend a Hope to deal 2d8+3 magic damage to targets you succeeded against."
          },
          {
            "id": "natural-familiar",
            "name": "NATURAL FAMILIAR",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to summon a small nature spirit or forest critter to your side until your next rest, you cast Natural Familiar again, or the familiar is targeted by an attack. If you spend an additional Hope, you can summon a familiar that flies. You can communicate with them, make a Spellcast Roll to command them to perform simple tasks, and mark a Stress to see through their eyes. When you deal damage to an adversary within Melee range of your familiar, you add a d6 to your damage roll. You can only have one spirit at a time."
          },
          {
            "id": "corrosive-projectile",
            "name": "CORROSIVE PROJECTILE",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, deal d6+4 magic damage using your Proficiency. Additionally, mark 2 or more Stress to make them permanently Corroded. While a target is Corroded, they gain a −1 penalty to their Difficulty for every 2 Stress you spent. This condition can stack."
          },
          {
            "id": "towering-stalk",
            "name": "TOWERING STALK",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per rest, you can conjure a thick, twisting stalk within Close range that can be easily climbed. Its height can grow up to Far range.\nMark a Stress to use this spell as an attack. Make a Spellcast Roll against an adversary or group of adversaries within Close range. The erupting stalk lifts targets you succeed against into the air and drops them, dealing d8 physical damage using your Proficiency."
          },
          {
            "id": "death-grip",
            "name": "DEATH GRIP",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range and choose one of the following options:\n  You pull the target into Melee range or pull yourself into Melee range of them.\n  You constrict the target and force them to mark 2 Stress.\n  All adversaries between you and the target must succeed on a Reaction Roll (13) or be hit by vines, taking 3d6+2 physical damage.\nOn a success, vines reach out from your hands, causing the chosen effect and temporarily Restraining the target."
          },
          {
            "id": "healing-field",
            "name": "HEALING FIELD",
            "level": 4,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, you can conjure a field of healing plants around you. Everywhere within Close range of you bursts to life with vibrant nature, allowing you and all allies in the area to clear a Hit Point.\nSpend 2 Hope to allow you and all allies to clear 2 Hit Points instead."
          },
          {
            "id": "thorn-skin",
            "name": "THORN SKIN",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per rest, spend a Hope to sprout thorns all over your body. When you do, place a number of tokens equal to your Spellcast trait on this card. When you take damage, you can spend any number of tokens to roll that number of d6s. Add the results together and reduce the incoming damage by that amount. If you’re within Melee range of the attacker, deal that amount of damage back to them.\nWhen you take a rest, clear all unspent tokens."
          },
          {
            "id": "wild-fortress",
            "name": "WILD FORTRESS",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, spend 2 Hope to grow a natural barricade in the shape of a dome that you and one ally can take cover within. While inside the dome, a creature can’t be targeted by attacks and can’t make attacks. Attacks made against the dome automatically succeed. The dome has the following damage thresholds and lasts until it marks 3 Hit Points. Place tokens on this card to represent marking Hit Points.\nThresholds: 15/30"
          },
          {
            "id": "conjured-steeds",
            "name": "CONJURED STEEDS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Spend any number of Hope to conjure that many magical steeds (such as horses, camels, or elephants) that you and your allies can ride until your next long rest or the steeds take any damage. The steeds double your land speed while traveling and, when in danger, allow you to move within Far range without having to roll. Creatures riding a steed gain a −2 penalty to attack rolls and a +2 bonus to damage rolls."
          },
          {
            "id": "forager",
            "name": "FORAGER",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "As an additional downtime move you can choose, roll a d6 to see what you forage. Work with the GM to describe it and add it to your inventory as a consumable. Your party can carry up to five foraged consumables at a time. 1. A unique food (Clear 2 Stress) 2. A beautiful relic (Gain 2 Hope) 3. An arcane rune (+2 to a Spellcast Roll) 4. A healing vial (Clear 2 Hit Points) 5. A luck charm (Reroll any die) 6. Choose one of the options above."
          },
          {
            "id": "sage-touched",
            "name": "SAGE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Sage domain, gain the following benefits:\n  While you’re in a natural environment, you gain a +2 bonus to your Spellcast Rolls.\n  Once per rest, you can double your Agility or Instinct when making a roll that uses that trait. You must choose to do this before you roll."
          },
          {
            "id": "wild-surge",
            "name": "WILD SURGE",
            "level": 7,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, mark a Stress to channel the natural world around you and enhance yourself. Describe how your appearance changes, then place a d6 on this card with the 1 value facing up. While the Wild Surge Die is active, you add its value to every action roll you make. After you add its value to a roll, increase the Wild Surge Die’s value by one. When the die’s value would exceed 6 or you take a rest, this form drops and you must mark an additional Stress."
          },
          {
            "id": "forest-sprites",
            "name": "FOREST SPRITES",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, spend any number of Hope to create an equal number of small forest sprites who appear at points you choose within Far range, providing the following benefits:\n  Your allies gain a +3 bonus to attack rolls against adversaries within Melee range of a sprite.\n  An ally who marks an Armor Slot while within Melee range of a sprite can mark an additional Armor Slot.\nA sprite vanishes after granting a benefit or taking any damage."
          },
          {
            "id": "rejuvenation-barrier",
            "name": "REJUVENATION BARRIER",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). Once per rest on a success, create a temporary barrier of protective energy around you at Very Close range. You and all allies within the barrier when this spell is cast clear 1d4 Hit Points. While the barrier is up, you and all allies within have resistance to physical damage from outside the barrier. When you move, the barrier follows you."
          },
          {
            "id": "fane-of-the-wilds",
            "name": "FANE OF THE WILDS",
            "level": 9,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "After a long rest, place a number of tokens equal to the number of Sage domain cards in your loadout and vault on this card. When you would make a Spellcast Roll, you can spend any number of tokens after the roll to gain a +1 bonus for each token spent. When you critically succeed on a Spellcast Roll for a Sage domain spell, gain a token. When you take a long rest, clear all unspent tokens."
          },
          {
            "id": "plant-dominion",
            "name": "PLANT DOMINION",
            "level": 9,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (18). Once per long rest on a success, you reshape the natural world, changing the surrounding plant life anywhere within Far range of you. For example, you can grow trees instantly, clear a path through dense vines, or create a wall of roots."
          },
          {
            "id": "force-of-nature",
            "name": "FORCE OF NATURE",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark a Stress to transform into a hulking nature spirit, gaining the following benefits:\n  When you succeed on an attack or Spellcast Roll, gain a +10 bonus to the damage roll.\n  When you deal enough damage to defeat a creature within Close range, you absorb them and clear an Armor Slot.\n  You can’t be Restrained.\nBefore you make an action roll, you must spend a Hope. If you can’t, you revert to your normal form."
          },
          {
            "id": "tempest",
            "name": "TEMPEST",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Choose one of the following tempests and make a Spellcast Roll against all targets within Far range. Targets you succeed against experience its effects until the GM spends a Fear on their turn to end this spell.\n  Blizzard: Deal 2d20+8 magic damage and targets are temporararily Vulnerable.\n  Hurricane: Deal 3d10+10 magic damage and choose a direction the wind is blowing. Targets can’t move against the wind.\n  Sandstorm: Deal 5d6+9 magic damage. Attacks made from beyond Melee range have disadvantage."
          }
        ]
      },
      {
        "id": "arcana",
        "name": "Arcana",
        "description": "Arcana is the domain of innate and instinctual magic. Those who choose this path tap into the raw, enigmatic forces of the realms to manipulate both their own energy and the elements. Arcana offers wielders a volatile power, but it is incredibly potent when correctly channeled.",
        "cards": [
          {
            "id": "rune-ward",
            "name": "RUNE WARD",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "You have a deeply personal trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it’s important to you. The ward’s holder can spend a Hope to reduce incoming damage by 1d8. If the Ward Die result is 8, the ward’s power ends after it reduces damage this turn. It can be recharged for free on your next rest."
          },
          {
            "id": "unleash-chaos",
            "name": "UNLEASH CHAOS",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "At the beginning of a session, place a number of tokens equal to your Spellcast trait on this card. Make a Spellcast Roll against a target within Far range and spend any number of tokens to channel raw energy from within yourself to unleash against them. On a success, roll a number of d10s equal to the tokens you spent and deal that much magic damage to the target. Mark a Stress to replenish this card with tokens (up to your Spellcast trait). At the end of each session, clear all unspent tokens."
          },
          {
            "id": "wall-walk",
            "name": "WALL WALK",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground. This lasts until the end of the scene or you cast Wall Walk again"
          },
          {
            "id": "cinder-grasp",
            "name": "CINDER GRASP",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Melee range. On a success, the target instantly bursts into flames, takes 1d20+3 magic damage, and is temporarily lit On Fire. When a creature acts while On Fire, they must take an extra 2d6 magic damage if they are still On Fire at the end of their action."
          },
          {
            "id": "floating-eye",
            "name": "FLOATING EYE",
            "level": 2,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Spend a Hope to create a single, small floating orb that you can move anywhere within Very Far range. While this spell is active, you can see through the orb as though you’re looking out from its position. You can transition between using your own senses and seeing through the orb freely. If the orb takes damage or moves out of range, the spell ends."
          },
          {
            "id": "counterspell",
            "name": "COUNTERSPELL",
            "level": 3,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can interrupt a magical effect taking place by making a reaction roll using your Spellcast trait. On a success, the effect stops and any consequences are avoided, and this card is placed in your vault."
          },
          {
            "id": "flight",
            "name": "FLIGHT",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). On a success, place a number of tokens equal to your Agility on this card (minimum 1). When you make an action roll while flying, spend a token from this card. After the action that spends the last token is resolved, you descend to the ground directly below you."
          },
          {
            "id": "blink-out",
            "name": "BLINK OUT",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (12). On a success, spend a Hope to teleport to another point you can see within Far range. If any willing creatures are within Very Close range, spend an additional Hope for each creature to bring them with you."
          },
          {
            "id": "preservation-blast",
            "name": "PRESERVATION BLAST",
            "level": 4,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all targets within Melee range. Targets you succeed against are forced back to Far range and take d8+3 magic damage using your Spellcast trait."
          },
          {
            "id": "chain-lightning",
            "name": "CHAIN LIGHTNING",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Mark 2 Stress to make a Spellcast Roll, unleashing lightning on all targets within Close range. Targets you succeed against must make a reaction roll with a Difficulty equal to the result of your Spellcast Roll. Targets who fail take 2d8+4 magic damage. Additional adversaries not already targeted by Chain Lightning and within Close range of previous targets who took damage must also make the reaction roll. Targets who fail take 2d8+4 magic damage. This chain continues until there are no more adversaries within range."
          },
          {
            "id": "premonition",
            "name": "PREMONITION",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can channel arcane energy to have visions of the future. Once per long rest, immediately after the GM conveys the consequences of a roll you made, you can rescind the move and consequences like they never happened and make another move instead."
          },
          {
            "id": "rift-walker",
            "name": "RIFT WALKER",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). On a success, you place an arcane marking on the ground where you currently stand. The next time you successfully cast Rift Walker, a rift in space opens up, providing safe passage back to the exact spot where the marking was placed. This rift stays open until you choose to close it or you cast another spell.\nYou can drop the spell at any time to cast Rift Walker again and place the marking somewhere new."
          },
          {
            "id": "telekinesis",
            "name": "TELEKINESIS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, you can use your mind to move them anywhere within Far range of their original position. You can throw the lifted target as an attack by making an additional Spellcast Roll against the second target you’re trying to attack. On a success, deal d12+4 physical damage to the second target using your Proficiency. This spell then ends."
          },
          {
            "id": "arcana-touched",
            "name": "ARCANA-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Arcana domain, gain the following benefits:\n  +1 bonus to your Spellcast Rolls\n  Once per rest, you can switch the results of your Hope and Fear Dice."
          },
          {
            "id": "cloaking-blast",
            "name": "CLOAKING BLAST",
            "level": 7,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "When you make a successful Spellcast Roll to cast a different spell, you can spend a Hope to become Cloaked. While Cloaked, you remain unseen if you are stationary when an adversary moves to where they would normally see you. When you move into or within an adversary’s line of sight or make an attack, you are no longer Cloaked."
          },
          {
            "id": "arcane-reflection",
            "name": "ARCANE REFLECTION",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you would take magic damage, you can spend any number of Hope to roll that many d6s. If any roll a 6, the attack is reflected back to the caster, dealing the damage to them instead."
          },
          {
            "id": "confusing-aura",
            "name": "CONFUSING AURA",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (14). Once per long rest on a success, you create a layer of illusion over your body that makes it hard to tell exactly where you are. Mark any number of Stress to make that many additional layers. When an adversary makes an attack against you, roll a number of d6s equal to the number of layers currently active. If any roll a 5 or higher, one layer of the aura is destroyed and the attack fails. If all the results are 4 or lower, you take the damage and this spell ends"
          },
          {
            "id": "earthquake",
            "name": "EARTHQUAKE",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per rest on a success, all targets within Very Far range who aren’t flying must make a Reaction Roll (18). Targets who fail take 3d10+8 physical damage and are temporarily Vulnerable. Targets who succeed take half damage.\nAdditionally, when you succeed on the Spellcast Roll, all terrain within Very Far range becomes difficult to move through and structures within this range might sustain damage or crumble."
          },
          {
            "id": "sensory-projection",
            "name": "SENSORY PROJECTION",
            "level": 9,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per rest, make a Spellcast Roll (15). On a success, drop into a vision that lets you clearly see and hear any place you have been before as though you are standing there in this moment. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means. You drop out of this vision upon taking damage or casting another spell."
          },
          {
            "id": "adjust-reality",
            "name": "ADJUST REALITY",
            "level": 10,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After you or a willing ally make any roll, you can spend 5 Hope to change the numerical result of that roll to a result of your choice instead. The result must be plausible within the range of the dice."
          },
          {
            "id": "falling-sky",
            "name": "FALLING SKY",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries within Far range. Mark any number of Stress to make shards of arcana rain down from above. Targets you succeed against take 1d20+2 magic damage for each Stress marked."
          }
        ]
      }
    ],
    "background_questions": [
      "Why was the community you grew up in so reliant on nature and its creatures?",
      "Who was the first wild animal you bonded with? Why did your bond end?",
      "Who has been trying to hunt you down? What do they want from you?"
    ],
    "connections": [
      "What did you confide in me that makes me leap into danger for you every time?",
      "What animal do I say you remind me of?",
      "What affectionate nickname have you given me?"
    ]
  },
  "guardian": {
    "id": "guardian",
    "name": "Guardian",
    "description": "The title of guardian represents an array of martial professions, speaking more to their moral compass and unshakeable fortitude than the means by which they fight. While many guardians join groups of militants for either a country or cause, they’re more likely to follow those few they truly care for, majority be damned. Guardians are known for fighting with remarkable ferocity even against overwhelming odds, defending their cohort above all else. Woe betide those who harm the ally of a guardian, as the guardian will answer this injury in kind.",
    "starting_evasion": 9,
    "starting_hit_points": 7,
    "class_items": [
      "A totem from your mentor",
      "A secret key"
    ],
    "class_features": [
      {
        "name": "Unstoppable",
        "feature": "Once per long rest, you can become Unstoppable. You gain an Unstoppable Die. At level 1, your Unstoppable Die is a d4. Place it on your character sheet in the space provided, starting with the 1 value facing up. After you make a damage roll that deals 1 or more Hit Points to a target, increase the Unstoppable Die value by one. When the die’s value would exceed its maximum value or when the scene ends, remove the die and drop out of Unstoppable. At level 5, your Unstoppable Die increases to a d6. While Unstoppable, you gain the following benefits:\n- You reduce the severity of physical damage by one threshold (Severe to Major, Major to Minor, Minor to None).\n- You add the current value of the Unstoppable Die to your damage roll.\n- You can’t be Restrained or Vulnerable."
      }
    ],
    "hope_feature": {
      "name": "Frontline Tank",
      "feature": "Spend 3 Hope to clear 2 Armor Slots."
    },
    "subclasses": [
      {
        "name": "Stalwart",
        "description": "Play the Stalwart if you want to take heavy blows and keep fighting.",
        "foundation_features": [
          {
            "name": "Unwavering",
            "feature": "Gain a permanent +1 bonus to your damage thresholds."
          },
          {
            "name": "Iron Will",
            "feature": "When you take physical damage, you can mark an additional Armor Slot to reduce the severity."
          }
        ],
        "specialization_features": [
          {
            "name": "Unrelenting",
            "feature": "Gain a permanent +2 bonus to your damage thresholds."
          },
          {
            "name": "Partners-in-Arms",
            "feature": "When an ally within Very Close range takes damage, you can mark an Armor Slot to reduce the severity by one threshold."
          }
        ],
        "mastery_features": [
          {
            "name": "Undaunted",
            "feature": "Gain a permanent +3 bonus to your damage thresholds."
          },
          {
            "name": "Loyal Protector",
            "feature": "When an ally within Close range has 2 or fewer Hit Points and would take damage, you can mark a Stress to sprint to their side and take the damage instead."
          }
        ]
      },
      {
        "name": "Vengeance",
        "description": "Play the Vengeance if you want to strike down enemies who harm you or your allies.",
        "foundation_features": [
          {
            "name": "At Ease",
            "feature": "Gain an additional Stress slot."
          },
          {
            "name": "Revenge",
            "feature": "When an adversary within Melee range succeeds on an attack against you, you can mark 2 Stress to force the attacker to mark a Hit Point."
          }
        ],
        "specialization_features": [
          {
            "name": "Act of Reprisal",
            "feature": "When an adversary damages an ally within Melee range, you gain a +1 bonus to your Proficiency for the next successful attack you make against that adversary."
          }
        ],
        "mastery_features": [
          {
            "name": "Nemesis",
            "feature": "Spend 2 Hope to Prioritize an adversary until your next rest. When you make an attack against your Prioritized adversary, you can swap the results of your Hope and Fear Dice. You can only Prioritize one adversary at a time."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "valor",
        "name": "Valor",
        "description": "Valor is the domain of protection. Whether through attack or defense, those who choose this discipline channel formidable strength to protect their allies in battle. Valor offers great power to those who raise their shields in defense of others.",
        "cards": [
          {
            "id": "bare-bones",
            "name": "BARE BONES",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you choose not to equip armor, you have a base Armor Score of 3 + your Strength and use the following as your base damage thresholds:\n  Tier 1: 9/19\n  Tier 2: 11/24\n  Tier 3: 13/31\n  Tier 4: 15/38"
          },
          {
            "id": "forceful-push",
            "name": "FORCEFUL PUSH",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Make an attack with your primary weapon against a target within Melee range. On a success, you deal damage and knock them back to Close range. On a success with Hope, add a d6 to your damage roll. Additionally, you can spend a Hope to make them temporarily Vulnerable."
          },
          {
            "id": "i-am-your-shield",
            "name": "I AM YOUR SHIELD",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When an ally within Very Close range would take damage, you can mark a Stress to stand in the way and make yourself the target of the attack instead. When you take damage from this attack, you can mark any number of Armor Slots."
          },
          {
            "id": "body-basher",
            "name": "BODY BASHER",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You use the full force of your body in a fight. On a successful attack using a weapon with a Melee range, gain a bonus to your damage roll equal to your Strength."
          },
          {
            "id": "bold-presence",
            "name": "BOLD PRESENCE",
            "level": 2,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a Presence Roll, you can spend a Hope to add your Strength to the roll. Additionally, once per rest when you would gain a condition, you can describe how your bold presence aids you in the situation and avoid gaining the condition."
          },
          {
            "id": "critical-inspiration",
            "name": "CRITICAL INSPIRATION",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when you critically succeed on an attack, all allies within Very Close range can clear a Stress or gain a Hope."
          },
          {
            "id": "lean-on-me",
            "name": "LEAN ON ME",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, when you console or inspire an ally who failed an action roll, you can both clear 2 Stress."
          },
          {
            "id": "goad-them-on",
            "name": "GOAD THEM ON",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Describe how you taunt a target within Close range, then make a Presence Roll against them. On a success, the target must mark a Stress, and the next time the GM spotlights them, they must target you with an attack, which they make with disadvantage."
          },
          {
            "id": "support-tank",
            "name": "SUPPORT TANK",
            "level": 4,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When an ally within Close range fails a roll, you can spend 2 Hope to allow them to reroll either their Hope or Fear Die."
          },
          {
            "id": "armorer",
            "name": "ARMORER",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "While you’re wearing armor, gain a +1 bonus to your Armor Score. During a rest, when you choose to repair your armor as a downtime move, your allies also clear an Armor Slot."
          },
          {
            "id": "rousing-strike",
            "name": "ROUSING STRIKE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when you critically succeed on an attack, you and all allies who can see or hear you can clear a Hit Point or 1d4 Stress."
          },
          {
            "id": "inevitable",
            "name": "INEVITABLE",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you fail an action roll, your next action roll has advantage."
          },
          {
            "id": "rise-up",
            "name": "RISE UP",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Gain a bonus to your Severe threshold equal to your Proficiency. When you mark 1 or more Hit Points from an attack, clear a Stress."
          },
          {
            "id": "shrug-it-off",
            "name": "SHRUG IT OFF",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you would take damage, you can mark a Stress to reduce the severity of the damage by one threshold. When you do, roll a d6. On a result of 3 or lower, place this card in your vault."
          },
          {
            "id": "valor-touched",
            "name": "VALOR-TOUCHED",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Valor domain, gain the following benefits:\n  +1 bonus to your Armor Score\n  When you mark 1 or more Hit Points without marking an Armor Slot, clear an Armor Slot."
          },
          {
            "id": "full-surge",
            "name": "FULL SURGE",
            "level": 8,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, mark 3 Stress to push your body to its limits. Gain a +2 bonus to all of your character traits until your next rest."
          },
          {
            "id": "ground-pound",
            "name": "GROUND POUND",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Spend 2 Hope to strike the ground where you stand and make a Strength Roll against all targets within Very Close range. Targets you succeed against are thrown back to Far range and must make a Reaction Roll (17). Targets who fail take 4d10+8 damage. Targets who succeed take half damage."
          },
          {
            "id": "hold-the-line",
            "name": "HOLD THE LINE",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Describe the defensive stance you take and spend a Hope. If an adversary moves within Very Close range, they’re pulled into Melee range and Restrained. This condition lasts until you move or fail a roll with Fear, or the GM spends 2 Fear on their turn to clear it."
          },
          {
            "id": "lead-by-example",
            "name": "LEAD BY EXAMPLE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you deal damage to an adversary, you can mark a Stress and describe how you encourage your allies. The next PC to make an attack against that adversary can clear a Stress or gain a Hope."
          },
          {
            "id": "unbreakable",
            "name": "UNBREAKABLE",
            "level": 10,
            "recall_cost": 4,
            "type": "Ability",
            "feature": "When you mark your last Hit Point, instead of making a death move, you can roll a d6 and clear a number of Hit Points equal to the result. Then place this card in your vault."
          },
          {
            "id": "unyielding-armor",
            "name": "UNYIELDING ARMOR",
            "level": 10,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you would mark an Armor Slot, roll a number of d6s equal to your Proficiency. If any roll a 6, reduce the severity by one threshold without marking an Armor Slot."
          }
        ]
      },
      {
        "id": "blade",
        "name": "Blade",
        "description": "Blade is the domain of weapon mastery. Whether by steel, bow, or perhaps a more specialized arm, those who follow this path have the skill to cut short the lives of others. Wielders of Blade dedicate themselves to achieving inexorable power over death.",
        "cards": [
          {
            "id": "get-back-up",
            "name": "GET BACK UP",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you take Severe damage, you can mark a Stress to reduce the severity by one threshold."
          },
          {
            "id": "not-good-enough",
            "name": "NOT GOOD ENOUGH",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you roll your damage dice, you can reroll any 1s or 2s."
          },
          {
            "id": "whirlwind",
            "name": "WHIRLWIND",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a successful attack against a target within Very Close range, you can spend a Hope to use the attack against all other targets within Very Close range. All additional adversaries you succeed against with this ability take half damage."
          },
          {
            "id": "a-soldier’s-bond",
            "name": "A SOLDIER’S BOND",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, when you compliment someone or ask them about something they’re good at, you can both gain 3 Hope."
          },
          {
            "id": "reckless",
            "name": "RECKLESS",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Mark a Stress to gain advantage on an attack."
          },
          {
            "id": "scramble",
            "name": "SCRAMBLE",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when a creature within Melee range would deal damage to you, you can avoid the attack and safely move out of Melee range of the enemy."
          },
          {
            "id": "versatile-fighter",
            "name": "VERSATILE FIGHTER",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You can use a different character trait for an equipped weapon, rather than the trait the weapon calls for.\nWhen you deal damage, you can mark a Stress to use the maximum result of one of your damage dice instead of rolling it."
          },
          {
            "id": "deadly-focus",
            "name": "DEADLY FOCUS",
            "level": 4,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per rest, you can apply all your focus toward a target of your choice. Until you attack another creature, you defeat the target, or the battle ends, gain a +1 bonus to your Proficiency."
          },
          {
            "id": "fortified-armor",
            "name": "FORTIFIED ARMOR",
            "level": 4,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "While you are wearing armor, gain a +2 bonus to your damage thresholds."
          },
          {
            "id": "champion’s-edge",
            "name": "CHAMPION’S EDGE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you critically succeed on an attack, you can spend up to 3 Hope and choose one of the following options for each Hope spent:\n  You clear a Hit Point.\n  You clear an Armor Slot.\n  The target must mark an additional Hit Point.\nYou can’t choose the same option more than once."
          },
          {
            "id": "vitality",
            "name": "VITALITY",
            "level": 5,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you choose this card, permanently gain two of the following benefits:\n  One Stress slot\n  One Hit Point slot\n  +2 bonus to your damage thresholds Then place this card in your vault permanently."
          },
          {
            "id": "battle-hardened",
            "name": "BATTLE-HARDENED",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per long rest when you would make a Death Move, you can spend a Hope to clear a Hit Point instead."
          },
          {
            "id": "rage-up",
            "name": "RAGE UP",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Before you make an attack, you can mark a Stress to gain a bonus to your damage roll equal to twice your Strength. You can Rage Up twice per attack."
          },
          {
            "id": "blade-touched",
            "name": "BLADE-TOUCHED",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Blade domain, gain the following benefits:\n  +2 bonus to your attack rolls\n  +4 bonus to your Severe damage threshold"
          },
          {
            "id": "glancing-blow",
            "name": "GLANCING BLOW",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you fail an attack, you can mark a Stress to deal weapon damage using half your Proficiency."
          },
          {
            "id": "battle-cry",
            "name": "BATTLE CRY",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per long rest, while you’re charging into danger, you can muster a rousing call that inspires your allies. All allies who can hear you each clear a Stress and gain a Hope. Additionally, your allies gain advantage on attack rolls until you or an ally rolls a failure with Fear."
          },
          {
            "id": "frenzy",
            "name": "FRENZY",
            "level": 8,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Once per long rest, you can go into a Frenzy until there are no more adversaries within sight.\nWhile Frenzied, you can’t use Armor Slots, and you gain a +10 bonus to your damage rolls and a +8 bonus to your Severe damage threshold."
          },
          {
            "id": "gore-and-glory",
            "name": "GORE AND GLORY",
            "level": 9,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you critically succeed on a weapon attack, gain an additional Hope or clear an additional Stress.\nAdditionally, when you deal enough damage to defeat an enemy, gain a Hope or clear a Stress."
          },
          {
            "id": "reaper’s-strike",
            "name": "REAPER’S STRIKE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Once per long rest, spend a Hope to make an attack roll. The GM tells you which targets within range it would succeed against. Choose one of these targets and force them to mark 5 Hit Points."
          },
          {
            "id": "battle-monster",
            "name": "BATTLE MONSTER",
            "level": 10,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a successful attack against an adversary, you can mark 4 Stress to force the target to mark a number of Hit Points equal to the number of Hit Points you currently have marked instead of rolling for damage."
          },
          {
            "id": "onslaught",
            "name": "ONSLAUGHT",
            "level": 10,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you successfully make an attack with your weapon, you never deal damage beneath a target’s Major damage threshold (the target always marks a minimum of 2 Hit Points). Additionally, when a creature within your weapon’s range deals damage to an ally with an attack that doesn’t include you, you can mark a Stress to force them to make a Reaction Roll (15). On a failure, the target must mark a Hit Point."
          }
        ]
      }
    ],
    "background_questions": [
      "What lie have you told me about yourself that I absolutely believe?"
    ],
    "connections": [
      "We knew each other long before this party came together. How?",
      "What mundane task do you usually help me with off the battlefield?",
      "What fear am I helping you overcome?"
    ]
  },
  "ranger": {
    "id": "ranger",
    "name": "Ranger",
    "description": "Rangers are highly skilled hunters who, despite their martial abilities, rarely lend their skills to an army. Through mastery of the body and a deep understanding of the wilderness, rangers become sly tacticians, pursuing their quarry with cunning and patience. Many rangers track and fight alongside an animal companion with whom they’ve forged a powerful spiritual bond. By honing their skills in the wild, rangers become expert trackers, as likely to ensnare their foes in a trap as they are to assail them head-on.",
    "starting_evasion": 12,
    "starting_hit_points": 6,
    "class_items": [
      "A trophy from your first kill",
      "A seemingly broken compass"
    ],
    "class_features": [
      {
        "name": "Ranger’s Focus",
        "feature": "Spend a Hope and make an attack against a target. On a success, deal your attack’s normal damage and temporarily make the attack’s target your Focus. Until this feature ends or you make a different creature your Focus, you gain the following benefits against your Focus:\n- You know precisely what direction they are in.\n- When you deal damage to them, they must mark a Stress.\n- When you fail an attack against them, you can end your Ranger’s Focus feature to reroll your Duality Dice."
      }
    ],
    "hope_feature": {
      "name": "Hold Them Off",
      "feature": "Spend 3 Hope when you succeed on an attack with a weapon to use that same roll against two additional adversaries within range of the attack."
    },
    "subclasses": [
      {
        "name": "Beastbound",
        "description": "Play the Beastbound if you want to form a deep bond with an animal ally.",
        "spellcast_trait": "Agility",
        "foundation_features": [
          {
            "name": "Companion",
            "feature": "You have an animal companion of your choice (at the GM’s discretion). They stay by your side unless you tell them otherwise."
          }
        ],
        "specialization_features": [],
        "mastery_features": []
      },
      {
        "name": "Wayfinder",
        "description": "Play the Wayfinder if you want to hunt your prey and strike with deadly force.",
        "spellcast_trait": "Agility",
        "foundation_features": [
          {
            "name": "Ruthless Predator",
            "feature": "When you make a damage roll, you can mark a Stress to gain a +1 bonus to your Proficiency. Additionally, when you deal Severe damage to an adversary, they must mark a Stress."
          },
          {
            "name": "Path Forward",
            "feature": "When you’re traveling to a place you’ve previously visited or you carry an object that has been at the location before, you can identify the shortest, most direct path to your destination."
          }
        ],
        "specialization_features": [
          {
            "name": "Elusive Predator",
            "feature": "When your Focus makes an attack against you, you gain a +2 bonus to your Evasion against the attack."
          }
        ],
        "mastery_features": [
          {
            "name": "Apex Predator",
            "feature": "Before you make an attack roll against your Focus, you can spend a Hope. On a successful attack, you remove a Fear from the GM’s Fear pool."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "bone",
        "name": "Bone",
        "description": "Bone is the domain of tactics and the body. Practitioners of this domain have an uncanny control over their own physical abilities and an eye for predicting the behaviors of others in combat. Adherents to Bone gain an unparalleled understanding of bodies and their movements.",
        "cards": [
          {
            "id": "deft-maneuvers",
            "name": "DEFT MANEUVERS",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Once per rest, mark a Stress to sprint anywhere within Far range without making an Agility Roll to get there. If you end this movement within Melee range of an adversary and immediately make an attack against them, gain a +1 bonus to the attack roll."
          },
          {
            "id": "i-see-it-coming",
            "name": "I SEE IT COMING",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you’re targeted by an attack made from beyond Melee range, you can mark a Stress to roll a d4 and gain a bonus to your Evasion equal to the result against the attack."
          },
          {
            "id": "untouchable",
            "name": "UNTOUCHABLE",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Gain a bonus to your Evasion equal to half your Agility."
          },
          {
            "id": "ferocity",
            "name": "FEROCITY",
            "level": 2,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you cause an adversary to mark 1 or more Hit Points, you can spend 2 Hope to increase your Evasion by the number of Hit Points they marked. This bonus lasts until after the next attack made against you."
          },
          {
            "id": "strategic-approach",
            "name": "STRATEGIC APPROACH",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After a long rest, place a number of tokens equal to your Knowledge on this card (minimum 1). The first time you move within Close range of an adversary and make an attack against them, you can spend one token to choose one of the following options:\n  You make the attack with advantage.\n  You clear a Stress on an ally within Melee range of the adversary.\n  You add a d8 to your damage roll. When you take a long rest, clear all unspent tokens."
          },
          {
            "id": "brace",
            "name": "BRACE",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you mark an Armor Slot to reduce incoming damage, you can mark a Stress to mark an additional Armor Slot."
          },
          {
            "id": "tactician",
            "name": "TACTICIAN",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you Help an Ally, they can spend a Hope to add one of your Experiences to their roll alongside your advantage die.\nWhen making a Tag Team Roll, you can roll a d20 as your Hope Die."
          },
          {
            "id": "boost",
            "name": "BOOST",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Mark a Stress to boost off a willing ally within Close range, fling yourself into the air, and perform an aerial attack against a target within Far range. You have advantage on the attack, add a d10 to the damage roll, and end your move within Melee range of the target."
          },
          {
            "id": "redirect",
            "name": "REDIRECT",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When an attack made against you from beyond Melee range fails, roll a number of d6s equal to your Proficiency. If any roll a 6, you can mark a Stress to redirect the attack to damage an adversary within Very Close range instead."
          },
          {
            "id": "know-thy-enemy",
            "name": "KNOW THY ENEMY",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When observing a creature, you can make an Instinct Roll against them. On a success, spend a Hope and ask the GM for one set of information about the target from the following options:\n  Their unmarked Hit Points and Stress.\n  Their Difficulty and damage thresholds.\n  Their tactics and standard attack damage dice.\n  Their features and Experiences. Additionally on a success, you can mark a Stress to remove a Fear from the GM’s Fear Pool."
          },
          {
            "id": "signature-move",
            "name": "SIGNATURE MOVE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Name and describe your signature combat move. Once per rest, when you perform this signature move as part of an action you’re taking, you can roll a d20 as your Hope Die. On a success, clear a Stress."
          },
          {
            "id": "rapid-riposte",
            "name": "RAPID RIPOSTE",
            "level": 6,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When an attack made against you from within Melee range fails, you can mark a Stress and seize the opportunity to deal the weapon damage of one of your active weapons to the attacker."
          },
          {
            "id": "recovery",
            "name": "RECOVERY",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "During a short rest, you can choose a long rest downtime move instead. You can spend a Hope to let an ally do the same."
          },
          {
            "id": "bone-touched",
            "name": "BONE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Bone domain, gain the following benefits:\n  +1 bonus to Agility\n  Once per rest, you can spend 3 Hope to cause an attack that succeeded against you to fail instead."
          },
          {
            "id": "cruel-precision",
            "name": "CRUEL PRECISION",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you make a successful attack with a weapon, gain a bonus to your damage roll equal to either your Finesse or Agility."
          },
          {
            "id": "breaking-blow",
            "name": "BREAKING BLOW",
            "level": 8,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you make a successful attack, you can mark a Stress to make the next successful attack against that same target deal an extra 2d12 damage."
          },
          {
            "id": "wrangle",
            "name": "WRANGLE",
            "level": 8,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Make an Agility Roll against all targets within Close range. Spend a Hope to move targets you succeed against, and any willing allies within Close range, to another point within Close range."
          },
          {
            "id": "on-the-brink",
            "name": "ON THE BRINK",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you have 2 or fewer Hit Points unmarked, you don’t take Minor damage."
          },
          {
            "id": "splintering-strike",
            "name": "SPLINTERING STRIKE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Spend a Hope and make an attack against all adversaries within your weapon’s range. Once per long rest, on a success against any targets, add up the damage dealt, then redistribute that damage however you wish between the targets you succeeded against. When you deal damage to a target, roll an additional damage die and add its result to the damage you deal to that target."
          },
          {
            "id": "swift-step",
            "name": "SWIFT STEP",
            "level": 10,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When an attack made against you fails, clear a Stress. If you can’t clear a Stress, gain a Hope."
          }
        ]
      },
      {
        "id": "sage",
        "name": "Sage",
        "description": "Sage is the domain of the natural world. Those who walk this path tap into the unfettered power of the earth and its creatures to unleash raw magic. Sage grants its adherents the vitality of a blooming flower and the ferocity of a ravenous predator.",
        "cards": [
          {
            "id": "gifted-tracker",
            "name": "GIFTED TRACKER",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you’re tracking a specific creature or group of creatures based on signs of their passage, you can spend any number of Hope and ask the GM that many questions from the following list.\n  What direction did they go?\n  How long ago did they pass through?\n  What were they doing in this location?\n  How many of them were here?\nWhen you encounter creatures you’ve tracked in this way, gain a +1 bonus to your Evasion against them."
          },
          {
            "id": "nature’s-tongue",
            "name": "NATURE’S TONGUE",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "You can speak the language of the natural world. When you want to speak to the plants and animals around you, make an Instinct Roll (12). On a success, they’ll give you the information they know. On a roll with Fear, their knowledge might be limited or come at a cost. Additionally, before you make a Spellcast Roll while within a natural environment, you can spend a Hope to gain a +2 bonus to the roll."
          },
          {
            "id": "vicious-entangle",
            "name": "VICIOUS ENTANGLE",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, roots and vines reach out from the ground, dealing 1d8+1 physical damage and temporarily Restraining the target. Additionally on a success, you can spend a Hope to temporarily Restrain another adversary within Very Close range of your target."
          },
          {
            "id": "conjure-swarm",
            "name": "CONJURE SWARM",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Tekaira Armored Beetles: Mark a Stress to conjure armored beetles that encircle you. When you next take damage, reduce the severity by one threshold. You can spend a Hope to keep the beetles conjured after taking damage. Fire Flies: Make a Spellcast Roll against all adversaries within Close range. Spend a Hope to deal 2d8+3 magic damage to targets you succeeded against."
          },
          {
            "id": "natural-familiar",
            "name": "NATURAL FAMILIAR",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to summon a small nature spirit or forest critter to your side until your next rest, you cast Natural Familiar again, or the familiar is targeted by an attack. If you spend an additional Hope, you can summon a familiar that flies. You can communicate with them, make a Spellcast Roll to command them to perform simple tasks, and mark a Stress to see through their eyes. When you deal damage to an adversary within Melee range of your familiar, you add a d6 to your damage roll. You can only have one spirit at a time."
          },
          {
            "id": "corrosive-projectile",
            "name": "CORROSIVE PROJECTILE",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, deal d6+4 magic damage using your Proficiency. Additionally, mark 2 or more Stress to make them permanently Corroded. While a target is Corroded, they gain a −1 penalty to their Difficulty for every 2 Stress you spent. This condition can stack."
          },
          {
            "id": "towering-stalk",
            "name": "TOWERING STALK",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per rest, you can conjure a thick, twisting stalk within Close range that can be easily climbed. Its height can grow up to Far range.\nMark a Stress to use this spell as an attack. Make a Spellcast Roll against an adversary or group of adversaries within Close range. The erupting stalk lifts targets you succeed against into the air and drops them, dealing d8 physical damage using your Proficiency."
          },
          {
            "id": "death-grip",
            "name": "DEATH GRIP",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range and choose one of the following options:\n  You pull the target into Melee range or pull yourself into Melee range of them.\n  You constrict the target and force them to mark 2 Stress.\n  All adversaries between you and the target must succeed on a Reaction Roll (13) or be hit by vines, taking 3d6+2 physical damage.\nOn a success, vines reach out from your hands, causing the chosen effect and temporarily Restraining the target."
          },
          {
            "id": "healing-field",
            "name": "HEALING FIELD",
            "level": 4,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, you can conjure a field of healing plants around you. Everywhere within Close range of you bursts to life with vibrant nature, allowing you and all allies in the area to clear a Hit Point.\nSpend 2 Hope to allow you and all allies to clear 2 Hit Points instead."
          },
          {
            "id": "thorn-skin",
            "name": "THORN SKIN",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per rest, spend a Hope to sprout thorns all over your body. When you do, place a number of tokens equal to your Spellcast trait on this card. When you take damage, you can spend any number of tokens to roll that number of d6s. Add the results together and reduce the incoming damage by that amount. If you’re within Melee range of the attacker, deal that amount of damage back to them.\nWhen you take a rest, clear all unspent tokens."
          },
          {
            "id": "wild-fortress",
            "name": "WILD FORTRESS",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, spend 2 Hope to grow a natural barricade in the shape of a dome that you and one ally can take cover within. While inside the dome, a creature can’t be targeted by attacks and can’t make attacks. Attacks made against the dome automatically succeed. The dome has the following damage thresholds and lasts until it marks 3 Hit Points. Place tokens on this card to represent marking Hit Points.\nThresholds: 15/30"
          },
          {
            "id": "conjured-steeds",
            "name": "CONJURED STEEDS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Spend any number of Hope to conjure that many magical steeds (such as horses, camels, or elephants) that you and your allies can ride until your next long rest or the steeds take any damage. The steeds double your land speed while traveling and, when in danger, allow you to move within Far range without having to roll. Creatures riding a steed gain a −2 penalty to attack rolls and a +2 bonus to damage rolls."
          },
          {
            "id": "forager",
            "name": "FORAGER",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "As an additional downtime move you can choose, roll a d6 to see what you forage. Work with the GM to describe it and add it to your inventory as a consumable. Your party can carry up to five foraged consumables at a time. 1. A unique food (Clear 2 Stress) 2. A beautiful relic (Gain 2 Hope) 3. An arcane rune (+2 to a Spellcast Roll) 4. A healing vial (Clear 2 Hit Points) 5. A luck charm (Reroll any die) 6. Choose one of the options above."
          },
          {
            "id": "sage-touched",
            "name": "SAGE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Sage domain, gain the following benefits:\n  While you’re in a natural environment, you gain a +2 bonus to your Spellcast Rolls.\n  Once per rest, you can double your Agility or Instinct when making a roll that uses that trait. You must choose to do this before you roll."
          },
          {
            "id": "wild-surge",
            "name": "WILD SURGE",
            "level": 7,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, mark a Stress to channel the natural world around you and enhance yourself. Describe how your appearance changes, then place a d6 on this card with the 1 value facing up. While the Wild Surge Die is active, you add its value to every action roll you make. After you add its value to a roll, increase the Wild Surge Die’s value by one. When the die’s value would exceed 6 or you take a rest, this form drops and you must mark an additional Stress."
          },
          {
            "id": "forest-sprites",
            "name": "FOREST SPRITES",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, spend any number of Hope to create an equal number of small forest sprites who appear at points you choose within Far range, providing the following benefits:\n  Your allies gain a +3 bonus to attack rolls against adversaries within Melee range of a sprite.\n  An ally who marks an Armor Slot while within Melee range of a sprite can mark an additional Armor Slot.\nA sprite vanishes after granting a benefit or taking any damage."
          },
          {
            "id": "rejuvenation-barrier",
            "name": "REJUVENATION BARRIER",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). Once per rest on a success, create a temporary barrier of protective energy around you at Very Close range. You and all allies within the barrier when this spell is cast clear 1d4 Hit Points. While the barrier is up, you and all allies within have resistance to physical damage from outside the barrier. When you move, the barrier follows you."
          },
          {
            "id": "fane-of-the-wilds",
            "name": "FANE OF THE WILDS",
            "level": 9,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "After a long rest, place a number of tokens equal to the number of Sage domain cards in your loadout and vault on this card. When you would make a Spellcast Roll, you can spend any number of tokens after the roll to gain a +1 bonus for each token spent. When you critically succeed on a Spellcast Roll for a Sage domain spell, gain a token. When you take a long rest, clear all unspent tokens."
          },
          {
            "id": "plant-dominion",
            "name": "PLANT DOMINION",
            "level": 9,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (18). Once per long rest on a success, you reshape the natural world, changing the surrounding plant life anywhere within Far range of you. For example, you can grow trees instantly, clear a path through dense vines, or create a wall of roots."
          },
          {
            "id": "force-of-nature",
            "name": "FORCE OF NATURE",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark a Stress to transform into a hulking nature spirit, gaining the following benefits:\n  When you succeed on an attack or Spellcast Roll, gain a +10 bonus to the damage roll.\n  When you deal enough damage to defeat a creature within Close range, you absorb them and clear an Armor Slot.\n  You can’t be Restrained.\nBefore you make an action roll, you must spend a Hope. If you can’t, you revert to your normal form."
          },
          {
            "id": "tempest",
            "name": "TEMPEST",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Choose one of the following tempests and make a Spellcast Roll against all targets within Far range. Targets you succeed against experience its effects until the GM spends a Fear on their turn to end this spell.\n  Blizzard: Deal 2d20+8 magic damage and targets are temporararily Vulnerable.\n  Hurricane: Deal 3d10+10 magic damage and choose a direction the wind is blowing. Targets can’t move against the wind.\n  Sandstorm: Deal 5d6+9 magic damage. Attacks made from beyond Melee range have disadvantage."
          }
        ]
      }
    ],
    "background_questions": [
      "A terrible creature hurt your community, and you’ve vowed to hunt them down. What are they, and what unique trail or sign do they leave behind?"
    ],
    "connections": []
  },
  "rogue": {
    "id": "rogue",
    "name": "Rogue",
    "description": "Rogues are scoundrels, often in both attitude and practice. Broadly known as liars and thieves, the best among this class move through the world anonymously. Utilizing their sharp wits and blades, rogues trick their foes through social manipulation as easily as breaking locks, climbing through windows, or dealing underhanded blows. These masters of magical craft manipulate shadow and movement, adding an array of useful and deadly tools to their repertoire. Rogues frequently establish guilds to meet future accomplices, hire out jobs, and hone secret skills, proving that there’s honor among thieves for those who know where to look.",
    "starting_evasion": 12,
    "starting_hit_points": 6,
    "class_items": [
      "A set of forgery tools",
      "A grappling hook"
    ],
    "class_features": [
      {
        "name": "Cloaked",
        "feature": "Any time you would be Hidden, you are instead Cloaked. In addition to the benefits of the Hidden condition, while Cloaked you remain unseen if you are stationary when an adversary moves to where they would normally see you. After you make an attack or end a move within line of sight of an adversary, you are no longer Cloaked."
      },
      {
        "name": "Sneak Attack",
        "feature": "When you succeed on an attack while Cloaked or while an ally is within Melee range of your target, add a number of d6s equal to your tier to your damage roll.\n- Level 1 → Tier 1\n- Levels 2–4 → Tier 2\n- Levels 5–7 → Tier 3\n- Levels 8–10 → Tier 4"
      }
    ],
    "hope_feature": {
      "name": "Rogue’s Dodge",
      "feature": "Spend 3 Hope to gain a +2 bonus to your Evasion until the next time an attack succeeds against you. Otherwise, this bonus lasts until your next rest."
    },
    "subclasses": [
      {
        "name": "Nightwalker",
        "description": "Play the Nightwalker if you want to manipulate shadows to maneuver through the environment.",
        "spellcast_trait": "Finesse",
        "foundation_features": [
          {
            "name": "Shadow Stepper",
            "feature": "You can move from shadow to shadow. When you move into an area of darkness or a shadow cast by another creature or object, you can mark a Stress to disappear from where you are and reappear inside another shadow within Far range. When you reappear, you are Cloaked."
          }
        ],
        "specialization_features": [
          {
            "name": "Dark Cloud",
            "feature": "Make a Spellcast Roll (15). On a success, create a temporary dark cloud that covers any area within Close range. Anyone in this cloud can’t see outside of it, and anyone outside of it can’t see in. You’re considered Cloaked from any adversary for whom the cloud blocks line of sight."
          },
          {
            "name": "Adrenaline",
            "feature": "While you're Vulnerable, add your level to your damage rolls."
          }
        ],
        "mastery_features": [
          {
            "name": "Fleeting Shadow",
            "feature": "Gain a permanent +1 bonus to your Evasion. You can use your “Shadow Stepper” feature to move within Very Far range."
          },
          {
            "name": "Vanishing Act",
            "feature": "Mark a Stress to become Cloaked at any time. When Cloaked from this feature, you automatically clear the Restrained condition if you have it. You remain Cloaked in this way until you roll with Fear or until your next rest."
          }
        ]
      },
      {
        "name": "Syndicate",
        "description": "Play the Syndicate if you want to have a web of contacts everywhere you go.",
        "spellcast_trait": "Finesse",
        "foundation_features": [
          {
            "name": "Well-Connected",
            "feature": "When you arrive in a prominent town or environment, you know somebody who calls this place home. Give them a name, note how you think they could be useful, and choose one fact from the following list:\n- They owe me a favor, but they’ll be hard to find.\n- They’re going to ask for something in exchange.\n- They’re always in a great deal of trouble.\n- We used to be together. It’s a long story.\n- We didn’t part on great terms."
          }
        ],
        "specialization_features": [
          {
            "name": "Contacts Everywhere",
            "feature": "Once per session, you can briefly call on a shady contact. Choose one of the following benefits and describe what brought them here to help you in this moment:\n- They provide 1 handful of gold, a unique tool, or a mundane object that the situation requires."
          }
        ],
        "mastery_features": [
          {
            "name": "Reliable Backup",
            "feature": "You can use your “Contacts Everywhere”\nfeature three times per session. The following options are\nadded to the list of benefits you can choose from when you\nuse that feature:\n• When you mark 1 or more Hit Points, they can rush out\nto shield you, reducing the Hit Points marked by 1.\n• When you make a Presence Roll in conversation, they\nback you up. You can roll a d20 as your Hope Die."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "midnight",
        "name": "Midnight",
        "description": "Midnight is the domain of shadows and secrecy. Whether by clever tricks, deft magic, or the cloak of night, those who channel these forces practice the art of obscurity and can uncover sequestered treasures. Midnight offers practitioners the power to control and create enigmas.",
        "cards": [
          {
            "id": "pick-and-pull",
            "name": "PICK AND PULL",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "You have advantage on action rolls to pick nonmagical locks, disarm nonmagical traps, or steal items from a target (either through stealth or by force)."
          },
          {
            "id": "rain-of-blades",
            "name": "RAIN OF BLADES",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to make a Spellcast Roll and conjure throwing blades that strike out at all targets within Very Close range. Targets you succeed against take d8+2 magic damage using your Proficiency.\nIf a target you hit is Vulnerable, they take an extra 1d8 damage."
          },
          {
            "id": "uncanny-disguise",
            "name": "UNCANNY DISGUISE",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "When you have a few minutes to prepare, you can mark a Stress to don the facade of any humanoid you can picture clearly in your mind. While disguised, you have advantage on Presence Rolls to avoid scrutiny. Place a number of tokens equal to your Spellcast trait on this card. When you take an action while disguised, spend a token from this card. After the action that spends the last token is resolved, the disguise drops."
          },
          {
            "id": "midnight-spirit",
            "name": "MIDNIGHT SPIRIT",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to summon a humanoid-sized spirit that can move or carry things for you until your next rest, you cast Natural Familiar again, or the familiar is targeted by an attack. If you spend an additional Hope, you can summon a familiar that flies. You can communicate with them, make a Spellcast Roll to command them to perform simple tasks, and mark a Stress to see through their eyes. When you deal damage to an adversary within Melee range of your familiar, you add a d6 to your damage roll. You can only have one spirit at a time."
          },
          {
            "id": "shadowbind",
            "name": "SHADOWBIND",
            "level": 2,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries within Very Close range. Targets you succeed against are temporarily Restrained as their shadow binds them in place."
          },
          {
            "id": "chokehold",
            "name": "CHOKEHOLD",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you position yourself behind a creature who’s about your size, you can mark a Stress to pull them into a chokehold, making them temporarily Vulnerable.\nWhen a creature attacks a target who is Vulnerable in this way, they deal an extra 2d6 damage."
          },
          {
            "id": "veil-of-night",
            "name": "VEIL OF NIGHT",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, you can create a temporary curtain of darkness between two points within Far range. Only you can see through this darkness. You’re considered Hidden to adversaries on the other side of the veil, and you have advantage on attacks you make through the darkness. The veil remains until you cast another spell."
          },
          {
            "id": "stealth-expertise",
            "name": "STEALTH EXPERTISE",
            "level": 4,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you roll with Fear while attempting to move unnoticed through a dangerous area, you can mark a Stress to roll with Hope instead.\nIf an ally within Close range is also attempting to move unnoticed and rolls with Fear, you can mark a Stress to change their result to a roll with Hope."
          },
          {
            "id": "glyph-of-nightfall",
            "name": "GLYPH OF NIGHTFALL",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Very Close range. On a success, spend a Hope to conjure a dark glyph upon their body that exposes their weak points, temporarily reducing the target’s Difficulty by a value equal to your Knowledge (minimum 1)."
          },
          {
            "id": "hush",
            "name": "HUSH",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, spend a Hope to conjure suppressive magic around the target that encompasses everything within Very Close range of them and follows them as they move. The target and anything within the area is Silenced until the GM spends a Fear on their turn to clear this condition, you cast Hush again, or you take Major damage. While Silenced, they can’t make noise and can’t cast spells."
          },
          {
            "id": "phantom-retreat",
            "name": "PHANTOM RETREAT",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Spend a Hope to activate Phantom Retreat where you’re currently standing. Spend another Hope at any time before your next rest to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This spell ends after you reappear."
          },
          {
            "id": "dark-whispers",
            "name": "DARK WHISPERS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "You can speak into the mind of any person with whom you’ve made physical contact. Once you’ve opened a channel with them, they can speak back into your mind. Additionally, you can mark a Stress to make a Spellcast Roll against them. On a success, you can ask the GM one of the following questions and receive an answer:\n  Where are they?\n  What are they doing?\n  What are they afraid of?\n  What do they cherish most in the world?"
          },
          {
            "id": "mass-disguise",
            "name": "MASS DISGUISE",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "When you have a few minutes of silence to focus, you can mark a Stress to change the appearance of all willing creatures within Close range. Their new forms must share a general body structure and size, and can be somebody or something you’ve seen before or entirely fabricated. A disguised creature has advantage on Presence Rolls to avoid scrutiny. Activate a Countdown (8). It ticks down as a consequence the GM chooses. When it triggers, the disguise drops."
          },
          {
            "id": "midnight-touched",
            "name": "MIDNIGHT-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Midnight domain, gain the following benefits:\n  Once per rest, when you have 0 Hope and the GM would gain a Fear, you can gain a Hope instead.\n  When you make a successful attack, you can mark a Stress to add the result of your Fear Die to your damage roll."
          },
          {
            "id": "vanishing-dodge",
            "name": "VANISHING DODGE",
            "level": 7,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When an attack made against you that would deal physical damage fails, you can spend a Hope to envelop yourself in shadow, becoming Hidden and teleporting to a point within Close range of the attacker. You remain Hidden until the next time you make an action roll."
          },
          {
            "id": "shadowhunter",
            "name": "SHADOWHUNTER",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Your prowess is enhanced under the cover of shadow. While you’re shrouded in low light or darkness, you gain a +1 bonus to your Evasion and make attack rolls with advantage."
          },
          {
            "id": "spellcharge",
            "name": "SPELLCHARGE",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you take magic damage, place tokens equal to the number of Hit Points you marked on this card. You can store a number of tokens equal to your Spellcast trait. When you make a successful attack against a target, you can spend any number of tokens to add a d6 for each token spent to your damage roll."
          },
          {
            "id": "night-terror",
            "name": "NIGHT TERROR",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, choose any targets within Very Close range to perceive you as a nightmarish horror. The targets must succeed on a Reaction Roll (16) or become temporarily Horrified. While Horrified, they’re Vulnerable. Steal a number of Fear from the GM equal to the number of targets that are Horrified (up to the number of Fear in the GM’s pool). Roll a number of d6s equal to the number of stolen Fear and deal the total damage to each Horrified target. Discard the stolen Fear."
          },
          {
            "id": "twilight-toll",
            "name": "TWILIGHT TOLL",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Choose a target within Far range. When you succeed on an action roll against them that doesn’t result in making a damage roll, place a token on this card. When you deal damage to this target, spend any number of tokens to add a d12 for each token spent to your damage roll. You can only hold Twilight Toll on one creature at a time. When you choose a new target or take a rest, clear all unspent tokens."
          },
          {
            "id": "eclipse",
            "name": "ECLIPSE",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per long rest on a success, plunge the entire area within Far range into complete darkness only you and your allies can see through. Attack rolls have disadvantage when targeting you or an ally within this shadow. Additionally, when you or an ally succeeds with Hope against an adversary within this shadow, the target must mark a Stress. This spell lasts until the GM spends a Fear on their turn to clear this effect or you take Severe damage."
          },
          {
            "id": "specter-of-the-dark",
            "name": "SPECTER OF THE DARK",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Mark a Stress to become Spectral until you make an action roll targeting another creature. While Spectral, you’re immune to physical damage and can float and pass through solid objects. Other creatures can still see you while you’re in this form."
          }
        ]
      },
      {
        "id": "grace",
        "name": "Grace",
        "description": "Grace is the domain of charisma. Through rapturous storytelling, charming spells, or a shroud of lies, those who channel this power define the realities of their adversaries, bending perception to their will. Grace offers its wielders raw magnetism and mastery over language.",
        "cards": [
          {
            "id": "deft-deceiver",
            "name": "DEFT DECEIVER",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Spend a Hope to gain advantage on a roll to deceive or trick someone into believing a lie you tell them."
          },
          {
            "id": "enrapture",
            "name": "ENRAPTURE",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, they become temporarily Enraptured. While Enraptured, a target’s attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Once per rest on a success, you can mark a Stress to force the Enraptured target to mark a Stress as well."
          },
          {
            "id": "inspirational-words",
            "name": "INSPIRATIONAL WORDS",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Your speech is imbued with power. After a long rest, place a number of tokens on this card equal to your Presence. When you speak with an ally, you can spend a token from this card to give them one benefit from the following options:\n  Your ally clears a Stress.\n  Your ally clears a Hit Point.\n  Your ally gains a Hope.\nWhen you take a long rest, clear all unspent tokens."
          },
          {
            "id": "tell-no-lies",
            "name": "TELL NO LIES",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Very Close range. On a success, they can’t lie to you while they remain within Close range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they must mark a Stress and the effect ends. The target is typically unaware this spell has been cast on them until it causes them to utter the truth."
          },
          {
            "id": "troublemaker",
            "name": "TROUBLEMAKER",
            "level": 2,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you taunt or provoke a target within Far range, make a Presence Roll against them. Once per rest on a success, roll a number of d4s equal to your Proficiency. The target must mark Stress equal to the highest result rolled."
          },
          {
            "id": "hypnotic-shimmer",
            "name": "HYPNOTIC SHIMMER",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries in front of you within Close range. Once per rest on a success, create an illusion of flashing colors and lights that temporarily Stuns targets you succeed against and forces them to mark a Stress. While Stunned, they can’t use reactions and can’t take any other actions until they clear this condition."
          },
          {
            "id": "invisibility",
            "name": "INVISIBILITY",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (10). On a success, mark a Stress and choose yourself or an ally within Melee range to become Invisible. An Invisible creature can’t be seen except through magical means and attack rolls against them are made with disadvantage. Place a number of tokens on this card equal to your Spellcast trait. When the Invisible creature takes an action, spend a token from this card. After the action that spends the last token is resolved, the effect ends.\nYou can only hold Invisibility on one creature at a time."
          },
          {
            "id": "soothing-speech",
            "name": "SOOTHING SPEECH",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "During a short rest, when you take the time to comfort another character while using the Tend to Wounds downtime move on them, clear an additional Hit Point on that character. When you do, you also clear 2 Hit Points."
          },
          {
            "id": "through-your-eyes",
            "name": "THROUGH YOUR EYES",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Choose a target within Very Far range. You can see through their eyes and hear through their ears. You can transition between using your own senses or the target’s freely until you cast another spell or until your next rest."
          },
          {
            "id": "thought-delver",
            "name": "THOUGHT DELVER",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can peek into the minds of others. Spend a Hope to read the vague surface thoughts of a target within Far range. Make a Spellcast Roll against the target to delve for deeper, more hidden thoughts.\nOn a roll with Fear, the target might, at the GM’s discretion, become aware that you’re reading their thoughts."
          },
          {
            "id": "words-of-discord",
            "name": "WORDS OF DISCORD",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Whisper words of discord to an adversary within Melee range and make a Spellcast Roll (13). On a success, the target must mark a Stress and make an attack against another adversary instead of against you or your allies. Once this attack is over, the target realizes what happened. The next time you cast Words of Discord on them, gain a −5 penalty to the Spellcast Roll."
          },
          {
            "id": "never-upstaged",
            "name": "NEVER UPSTAGED",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you mark 1 or more Hit Points from an attack, you can mark a Stress to place a number of tokens equal to the number of Hit Points you marked on this card. On your next successful attack, gain a +5 bonus to your damage roll for each token on this card, then clear all tokens."
          },
          {
            "id": "share-the-burden",
            "name": "SHARE THE BURDEN",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per rest, take on the Stress from a willing creature within Melee range. The target describes what intimate knowledge or emotions telepathically leak from their mind in this moment between you. Transfer any number of their marked Stress to you, then gain a Hope for each Stress transferred."
          },
          {
            "id": "endless-charisma",
            "name": "ENDLESS CHARISMA",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After you make an action roll to persuade, lie, or garner favor, you can spend a Hope to reroll the Hope or Fear Die."
          },
          {
            "id": "grace-touched",
            "name": "GRACE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Grace domain, gain the following benefits:\n  You can mark an Armor Slot instead of marking a Stress.\n  When you would force a target to mark a number of Hit Points, you can choose instead to force them to mark that number of Stress."
          },
          {
            "id": "astral-projection",
            "name": "ASTRAL PROJECTION",
            "level": 8,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per long rest, mark a Stress to create a projected copy of yourself that can appear anywhere you’ve been before.\nYou can see and hear through the projection as though it were you and affect the world as though you were there. A creature investigating the projection can tell it’s of magical origin. This effect lasts until your next rest or your projection takes any damage."
          },
          {
            "id": "mass-enrapture",
            "name": "MASS ENRAPTURE",
            "level": 8,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all targets within Far range. Targets you succeed against become temporarily Enraptured. While Enraptured, a target’s attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Mark a Stress to force all Enraptured targets to mark a Stress, ending this spell."
          },
          {
            "id": "copycat",
            "name": "COPYCAT",
            "level": 9,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "Once per long rest, this card can mimic the features of another domain card of level 8 or lower in another player’s loadout. Spend Hope equal to half the card’s level to gain access to the feature. It lasts until your next rest or they place the card in their vault."
          },
          {
            "id": "master-of-the-craft",
            "name": "MASTER OF THE CRAFT",
            "level": 9,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Gain a permanent +2 bonus to two of your Experiences or a permanent +3 bonus to one of your Experiences. Then place this card in your vault permanently."
          },
          {
            "id": "encore",
            "name": "ENCORE",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When an ally within Close range deals damage to an adversary, you can make a Spellcast Roll against that same target. On a success, you deal the same damage to the target that your ally dealt. If your Spellcast Roll succeeds with Fear, place this card in your vault."
          },
          {
            "id": "notorious",
            "name": "NOTORIOUS",
            "level": 10,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "People know who you are and what you’ve done, and they treat you differently because of it. When you leverage your notoriety to get what you want, you can mark a Stress before you roll to gain a +10 bonus to the result. Your food and drinks are always free wherever you go, and everything else you buy is reduced in price by one bag of gold (to a minimum of one handful).\nThis card doesn’t count against your loadout’s domain card maximum of 5 and can’t be placed in your vault."
          }
        ]
      }
    ],
    "background_questions": [
      "What did you get caught doing that got you exiled from your home community?",
      "You used to have a different life, but you’ve tried to leave it behind. Who from you past is still chasing you?",
      "Who from your past were you most sad to say goodbye to?"
    ],
    "connections": [
      "What did I recently convince you to do that got us both in trouble?",
      "What have I discovered about your past that I hold secret from the others?",
      "Who do you know from my past, and how have they influenced your feelings about me?"
    ]
  },
  "seraph": {
    "id": "seraph",
    "name": "Seraph",
    "description": "Seraphs are divine fighters and healers imbued with sacred purpose. A wide array of deities exist within the realms, and thus numerous kinds of seraphs are appointed by these gods. Their ethos traditionally aligns with the domain or goals of their god, such as defending the weak, exacting vengeance, protecting a land or artifact, or upholding a particular faith. Some seraphs ally themselves with an army or locale, much to the satisfaction of their rulers, but other crusaders fight in opposition to the follies of the Mortal Realm. It is better to be a seraph’s ally than their enemy, as they are terrifying foes to those who defy their purpose.",
    "starting_evasion": 9,
    "starting_hit_points": 7,
    "class_items": [
      "A bundle of offerings",
      "A sigil of your god"
    ],
    "class_features": [
      {
        "name": "Prayer Dice",
        "feature": "At the beginning of each session, roll a number of d4s equal to your subclass’s Spellcast trait and place them on your character sheet in the space provided. These are your Prayer Dice. You can spend any number of Prayer Dice to aid yourself or an ally within Far range. You can use a spent die’s value to reduce incoming damage, add to a roll’s result after the roll is made, or gain Hope equal to the result. At the end of each session, clear all unspent Prayer Dice."
      }
    ],
    "hope_feature": {
      "name": "Life Support",
      "feature": "Spend 3 Hope to clear a Hit Point on an ally within Close range."
    },
    "subclasses": [
      {
        "name": "Divine Wielder",
        "description": "Play the Divine Wielder if you want to dominate the battlefield with a legendary weapon.",
        "spellcast_trait": "Strength",
        "foundation_features": [
          {
            "name": "Spirit Weapon",
            "feature": "When you have an equipped weapon with a range of Melee or Very Close, it can fly from your hand to attack an adversary within Close range and then return to you. You can mark a Stress to target an additional adversary within range with the same attack roll."
          },
          {
            "name": "Sparing Touch",
            "feature": "Once per long rest, touch a creature and clear 2 Hit Points or 2 Stress from them."
          }
        ],
        "specialization_features": [
          {
            "name": "Devout",
            "feature": "When you roll your Prayer Dice, you can roll an additional die and discard the lowest result. Additionally, you can use your “Sparing Touch” feature twice instead of once per long rest."
          }
        ],
        "mastery_features": [
          {
            "name": "Sacred Resonance",
            "feature": "When you roll damage for your “Spirit Weapon” feature, if any of the die results match, double the value of each matching die. For example, if you roll two 5s, they count as two 10s."
          }
        ]
      },
      {
        "name": "Winged Sentinel",
        "description": "Play the Winged Sentinel if you want to take flight and strike crushing blows from the sky.",
        "spellcast_trait": "Strength",
        "foundation_features": [
          {
            "name": "Wings of Light",
            "feature": "You can fly. While flying, you can do the following:\n- Mark a Stress to pick up and carry another willing creature approximately your size or smaller.\n- Spend a Hope to deal an extra 1d8 damage on a successful attack."
          }
        ],
        "specialization_features": [
          {
            "name": "Ethereal Visage",
            "feature": "Your supernatural visage strikes awe and fear. While flying, you have advantage on Presence Rolls. When you succeed with Hope on a Presence Roll, you can remove a Fear from the GM’s Fear pool instead of gaining Hope."
          }
        ],
        "mastery_features": [
          {
            "name": "Ascendant",
            "feature": "Gain a permanent +4 bonus to your Severe damage threshold."
          },
          {
            "name": "Power of the Gods",
            "feature": "While flying, you deal an extra 1d12 damage instead of 1d8 from your “Wings of Light” feature."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "splendor",
        "name": "Splendor",
        "description": "Splendor is the domain of life. Through this magic, followers gain the ability to heal and, to an extent, control death. Splendor offers its disciples the magnificent ability to both give and end life.",
        "cards": [
          {
            "id": "bolt-beacon",
            "name": "BOLT BEACON",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, spend a Hope to send a bolt of shimmering light toward them, dealing d8+2 magic damage using your Proficiency. The target becomes temporarily Vulnerable and glows brightly until this condition is cleared."
          },
          {
            "id": "mending-touch",
            "name": "MENDING TOUCH",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "You lay your hands upon a creature and channel healing magic to close their wounds. When you can take a few minutes to focus on the target you’re helping, you can spend 2 Hope to clear a Hit Point or a Stress on them. Once per long rest, when you spend this healing time learning something new about them or revealing something about yourself, you can clear 2 Hit Points or 2 Stress on them instead."
          },
          {
            "id": "reassurance",
            "name": "REASSURANCE",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Once per rest, after an ally attempts an action roll but before the consequences take place, you can offer assistance or words of support. When you do, your ally can reroll their dice."
          },
          {
            "id": "final-words",
            "name": "FINAL WORDS",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "You can infuse a corpse with a moment of life to speak with it. Make a Spellcast Roll (13). On a success with Hope, the corpse answers up to three questions. On a success with Fear, the corpse answers one question. The corpse answers truthfully, but it can’t impart information it didn’t know in life. On a failure, or once the corpse has finished answering your questions, the body turns to dust."
          },
          {
            "id": "healing-hands",
            "name": "HEALING HANDS",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13) and target a creature other than yourself within Melee range. On a success, mark a Stress to clear 2 Hit Points or 2 Stress on the target. On a failure, mark a Stress to clear a Hit Point or a Stress on the target. You can’t heal the same target again until your next long rest."
          },
          {
            "id": "second-wind",
            "name": "SECOND WIND",
            "level": 3,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per rest, when you succeed on an attack against an adversary, you can clear 3 Stress or a Hit Point. On a success with Hope, you also clear 3 Stress or a Hit Point on an ally within Close range of you."
          },
          {
            "id": "voice-of-reason",
            "name": "VOICE OF REASON",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You speak with an unmatched power and authority. You have advantage on action rolls to de-escalate violent situations or convince someone to follow your lead. Additionally, you’re emboldened in moments of duress. When all of your Stress slots are marked, you gain a +1 bonus to your Proficiency for damage rolls."
          },
          {
            "id": "divination",
            "name": "DIVINATION",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per long rest, spend 3 Hope to reach out to the forces beyond and ask one “yes or no” question about an event, person, place, or situation in the near future. For a moment, the present falls away and you see the answer before you."
          },
          {
            "id": "life-ward",
            "name": "LIFE WARD",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend 3 Hope and choose an ally within Close range. They are marked with a glowing sigil of protection. When this ally would make a death move, they clear a Hit Point instead. This effect ends when it saves the target from a death move, you cast Life Ward on another target, or you take a long rest."
          },
          {
            "id": "shape-material",
            "name": "SHAPE MATERIAL",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to shape a section of natural material you’re touching (such as stone, ice, or wood) to suit your purpose. The area of the material can be no larger than you. For example, you can form a rudimentary tool or create a door. You can only affect the material within Close range of where you’re touching it."
          },
          {
            "id": "smite",
            "name": "SMITE",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per rest, spend 3 Hope to charge your powerful smite. When you next successfully attack with a weapon, double the result of your damage roll. This attack deals magic damage regardless of the weapon’s damage type."
          },
          {
            "id": "restoration",
            "name": "RESTORATION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "After a long rest, place a number of tokens equal to your Spellcast trait on this card. Touch a creature and spend any number of tokens to clear 2 Hit Points or 2 Stress for each token spent.\nYou can also spend a token from this card when touching a creature to clear the Vulnerable condition or heal a physical or magical ailment (the GM might require additional tokens depending on the strength of the ailment).\nWhen you take a long rest, clear all unspent tokens."
          },
          {
            "id": "zone-of-protection",
            "name": "ZONE OF PROTECTION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per long rest on a success, choose a point within Far range and create a visible zone of protection there for all allies within Very Close range of that point. When you do, place a d6 on this card with the 1 value facing up. When an ally in this zone takes damage, they reduce it by the die’s value. You then increase the die’s value by one. When the die’s value would exceed 6, this effect ends."
          },
          {
            "id": "healing-strike",
            "name": "HEALING STRIKE",
            "level": 7,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you deal damage to an adversary, you can spend 2 Hope to clear a Hit Point on an ally within Close range."
          },
          {
            "id": "splendor-touched",
            "name": "SPLENDOR-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Splendor domain, gain the following benefits:\n  +3 bonus to your Severe damage threshold\n  Once per long rest, when incoming damage would require you to mark a number of Hit Points, you can choose to mark that much Stress or spend that much Hope instead."
          },
          {
            "id": "shield-aura",
            "name": "SHIELD AURA",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark a Stress to cast a protective aura on a target within Very Close range. When the target marks an Armor Slot, they reduce the severity of the attack by an additional threshold. If this spell causes a creature who would be damaged to instead mark no Hit Points, the effect ends.\nYou can only hold Shield Aura on one creature at a time."
          },
          {
            "id": "stunning-sunlight",
            "name": "STUNNING SUNLIGHT",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll to unleash powerful rays of burning sunlight against all adversaries in front of you within Far range. On a success, spend any number of Hope and force that many targets you succeeded against to make a Reaction Roll (14).\nTargets who succeed take 3d20+3 magic damage. Targets who fail take 4d20+5 magic damage and are temporarily Stunned. While Stunned, they can’t use reactions and can’t take any other actions until they clear this condition."
          },
          {
            "id": "overwhelming-aura",
            "name": "OVERWHELMING AURA",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15) to magically empower your aura. On a success, spend 2 Hope to make your Presence equal to your Spellcast trait until your next long rest.\nWhile this spell is active, an adversary must mark a Stress when they target you with an attack."
          },
          {
            "id": "salvation-beam",
            "name": "SALVATION BEAM",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). On a success, mark any number of Stress to target a line of allies within Far range. You can clear Hit Points on the targets equal to the number of Stress marked, divided among them however you’d like."
          },
          {
            "id": "invigoration",
            "name": "INVIGORATION",
            "level": 10,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "When you or an ally within Close range has used a feature that has an exhaustion limit (such as once per rest or once per session), you can spend any number of Hope and roll that many d6s. If any roll a 6, the feature can be used again."
          },
          {
            "id": "resurrection",
            "name": "RESURRECTION",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (20). On a success, restore one creature who has been dead no longer than 100 years to full strength. Then roll a d6. On a result of 5 or lower, place this card in your vault permanently. On a failure, you can’t cast Resurrection again for a week."
          }
        ]
      },
      {
        "id": "valor",
        "name": "Valor",
        "description": "Valor is the domain of protection. Whether through attack or defense, those who choose this discipline channel formidable strength to protect their allies in battle. Valor offers great power to those who raise their shields in defense of others.",
        "cards": [
          {
            "id": "bare-bones",
            "name": "BARE BONES",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you choose not to equip armor, you have a base Armor Score of 3 + your Strength and use the following as your base damage thresholds:\n  Tier 1: 9/19\n  Tier 2: 11/24\n  Tier 3: 13/31\n  Tier 4: 15/38"
          },
          {
            "id": "forceful-push",
            "name": "FORCEFUL PUSH",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Make an attack with your primary weapon against a target within Melee range. On a success, you deal damage and knock them back to Close range. On a success with Hope, add a d6 to your damage roll. Additionally, you can spend a Hope to make them temporarily Vulnerable."
          },
          {
            "id": "i-am-your-shield",
            "name": "I AM YOUR SHIELD",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When an ally within Very Close range would take damage, you can mark a Stress to stand in the way and make yourself the target of the attack instead. When you take damage from this attack, you can mark any number of Armor Slots."
          },
          {
            "id": "body-basher",
            "name": "BODY BASHER",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You use the full force of your body in a fight. On a successful attack using a weapon with a Melee range, gain a bonus to your damage roll equal to your Strength."
          },
          {
            "id": "bold-presence",
            "name": "BOLD PRESENCE",
            "level": 2,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a Presence Roll, you can spend a Hope to add your Strength to the roll. Additionally, once per rest when you would gain a condition, you can describe how your bold presence aids you in the situation and avoid gaining the condition."
          },
          {
            "id": "critical-inspiration",
            "name": "CRITICAL INSPIRATION",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when you critically succeed on an attack, all allies within Very Close range can clear a Stress or gain a Hope."
          },
          {
            "id": "lean-on-me",
            "name": "LEAN ON ME",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, when you console or inspire an ally who failed an action roll, you can both clear 2 Stress."
          },
          {
            "id": "goad-them-on",
            "name": "GOAD THEM ON",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Describe how you taunt a target within Close range, then make a Presence Roll against them. On a success, the target must mark a Stress, and the next time the GM spotlights them, they must target you with an attack, which they make with disadvantage."
          },
          {
            "id": "support-tank",
            "name": "SUPPORT TANK",
            "level": 4,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When an ally within Close range fails a roll, you can spend 2 Hope to allow them to reroll either their Hope or Fear Die."
          },
          {
            "id": "armorer",
            "name": "ARMORER",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "While you’re wearing armor, gain a +1 bonus to your Armor Score. During a rest, when you choose to repair your armor as a downtime move, your allies also clear an Armor Slot."
          },
          {
            "id": "rousing-strike",
            "name": "ROUSING STRIKE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when you critically succeed on an attack, you and all allies who can see or hear you can clear a Hit Point or 1d4 Stress."
          },
          {
            "id": "inevitable",
            "name": "INEVITABLE",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you fail an action roll, your next action roll has advantage."
          },
          {
            "id": "rise-up",
            "name": "RISE UP",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Gain a bonus to your Severe threshold equal to your Proficiency. When you mark 1 or more Hit Points from an attack, clear a Stress."
          },
          {
            "id": "shrug-it-off",
            "name": "SHRUG IT OFF",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you would take damage, you can mark a Stress to reduce the severity of the damage by one threshold. When you do, roll a d6. On a result of 3 or lower, place this card in your vault."
          },
          {
            "id": "valor-touched",
            "name": "VALOR-TOUCHED",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Valor domain, gain the following benefits:\n  +1 bonus to your Armor Score\n  When you mark 1 or more Hit Points without marking an Armor Slot, clear an Armor Slot."
          },
          {
            "id": "full-surge",
            "name": "FULL SURGE",
            "level": 8,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, mark 3 Stress to push your body to its limits. Gain a +2 bonus to all of your character traits until your next rest."
          },
          {
            "id": "ground-pound",
            "name": "GROUND POUND",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Spend 2 Hope to strike the ground where you stand and make a Strength Roll against all targets within Very Close range. Targets you succeed against are thrown back to Far range and must make a Reaction Roll (17). Targets who fail take 4d10+8 damage. Targets who succeed take half damage."
          },
          {
            "id": "hold-the-line",
            "name": "HOLD THE LINE",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Describe the defensive stance you take and spend a Hope. If an adversary moves within Very Close range, they’re pulled into Melee range and Restrained. This condition lasts until you move or fail a roll with Fear, or the GM spends 2 Fear on their turn to clear it."
          },
          {
            "id": "lead-by-example",
            "name": "LEAD BY EXAMPLE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you deal damage to an adversary, you can mark a Stress and describe how you encourage your allies. The next PC to make an attack against that adversary can clear a Stress or gain a Hope."
          },
          {
            "id": "unbreakable",
            "name": "UNBREAKABLE",
            "level": 10,
            "recall_cost": 4,
            "type": "Ability",
            "feature": "When you mark your last Hit Point, instead of making a death move, you can roll a d6 and clear a number of Hit Points equal to the result. Then place this card in your vault."
          },
          {
            "id": "unyielding-armor",
            "name": "UNYIELDING ARMOR",
            "level": 10,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you would mark an Armor Slot, roll a number of d6s equal to your Proficiency. If any roll a 6, reduce the severity by one threshold without marking an Armor Slot."
          }
        ]
      }
    ],
    "background_questions": [
      "Which god did you devote yourself to? What incredible feat did they perform for you in a moment of desperation?",
      "How did your appearance change after taking your oath?",
      "In what strange or unique way do you communicate with your god?"
    ],
    "connections": [
      "What promise did you make me agree to, should you die on the battlefield?",
      "Why do you ask me so many questions about my god?",
      "You’ve told me to protect one member of our party above all others, even yourself. Who are they and why?"
    ]
  },
  "sorcerer": {
    "id": "sorcerer",
    "name": "Sorcerer",
    "description": "Not all innate magic users choose to hone their craft, but those who do can become powerful sorcerers. The gifts of these wielders are passed down through families, even if the family is unaware of or reluctant to practice them. A sorcerer’s abilities can range from the elemental to the illusionary and beyond, and many practitioners band together into collectives based on their talents. The act of becoming a formidable sorcerer is not the practice of acquiring power, but learning to cultivate and control the power one already possesses. The magic of a misguided or undisciplined sorcerer is a dangerous force indeed.",
    "starting_evasion": 10,
    "starting_hit_points": 6,
    "class_items": [
      "A whispering orb",
      "A family heirloom"
    ],
    "class_features": [
      {
        "name": "Arcane Sense",
        "feature": "You can sense the presence of magical people and objects within Close range."
      },
      {
        "name": "Minor Illusion",
        "feature": "Make a Spellcast Roll (10). On a success, you create a minor visual illusion no larger than yourself within Close range. This illusion is convincing to anyone at Close range or farther."
      },
      {
        "name": "Channel Raw Power",
        "feature": "Once per long rest, you can place a domain card from your loadout into your vault and choose to either:\n- Gain Hope equal to the level of the card.\n- Enhance a spell that deals damage, gaining a bonus to your damage roll equal to twice the level of the card."
      }
    ],
    "hope_feature": {
      "name": "Volatile Magic",
      "feature": "Spend 3 Hope to reroll any number of your damage dice on an attack that deals magic damage."
    },
    "subclasses": [
      {
        "name": "Elemental Origin",
        "description": "Play the Elemental Origin if you want to channel raw magic to take the shape of a particular element.",
        "spellcast_trait": "Instinct",
        "foundation_features": [
          {
            "name": "Elementalist",
            "feature": "Choose one of the following elements at character creation: air, earth, fire, lightning, water.\nYou can shape this element into harmless effects. Additionally, spend a Hope and describe how your control over this element helps an action roll you’re about to make, then either gain a +2 bonus to the roll or a +3 bonus to the roll’s damage."
          }
        ],
        "specialization_features": [
          {
            "name": "Natural Evasion",
            "feature": "You can call forth your element to protect you from harm. When an attack roll against you succeeds, you can mark a Stress and describe how you use your element to defend you. When you do, roll a d6 and add its result to your Evasion against the attack."
          }
        ],
        "mastery_features": [
          {
            "name": "Transcendence",
            "feature": "Once per long rest, you can transform into a physical manifestation of your element. When you do, describe your transformation and choose two of the following benefits to gain until your next rest:\n- +4 bonus to your Severe threshold\n- +1 bonus to a character trait of your choice\n- +1 bonus to your Proficiency\n- +2 bonus to your Evasion"
          }
        ]
      },
      {
        "name": "Primal Origin",
        "description": "Play the Primal Origin if you want to extend the versatility of your spells in powerful ways.",
        "spellcast_trait": "Instinct",
        "foundation_features": [
          {
            "name": "Manipulate Magic",
            "feature": "Your primal origin allows you to modify the essence of magic itself. After you cast a spell or make an attack using a weapon that deals magic damage, you can mark a Stress to do one of the following:\n- Extend the spell or attack’s reach by one range\n- Gain a +2 bonus to the action roll’s result\n- Double a damage die of your choice\n- Hit an additional target within range"
          }
        ],
        "specialization_features": [
          {
            "name": "Enchanted Aid",
            "feature": "You can enhance the magic of others with your essence. When you Help an Ally with a Spellcast Roll, you can roll a d8 as your advantage die. Once per long rest, after an ally has made a Spellcast Roll with your help, you can swap the results of their Duality Dice."
          }
        ],
        "mastery_features": [
          {
            "name": "Arcane Charge",
            "feature": "You can gather magical energy to enhance your capabilities. When you take magic damage, you become Charged. Alternatively, you can spend 2 Hope to become Charged. When you successfully make an attack that deals magic damage while Charged, you can clear your Charge to either gain a +10 bonus to the damage roll or gain a +3 bonus to the Difficulty of a reaction roll the spell causes the target to make. You stop being Charged at your next long rest."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "arcana",
        "name": "Arcana",
        "description": "Arcana is the domain of innate and instinctual magic. Those who choose this path tap into the raw, enigmatic forces of the realms to manipulate both their own energy and the elements. Arcana offers wielders a volatile power, but it is incredibly potent when correctly channeled.",
        "cards": [
          {
            "id": "rune-ward",
            "name": "RUNE WARD",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "You have a deeply personal trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it’s important to you. The ward’s holder can spend a Hope to reduce incoming damage by 1d8. If the Ward Die result is 8, the ward’s power ends after it reduces damage this turn. It can be recharged for free on your next rest."
          },
          {
            "id": "unleash-chaos",
            "name": "UNLEASH CHAOS",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "At the beginning of a session, place a number of tokens equal to your Spellcast trait on this card. Make a Spellcast Roll against a target within Far range and spend any number of tokens to channel raw energy from within yourself to unleash against them. On a success, roll a number of d10s equal to the tokens you spent and deal that much magic damage to the target. Mark a Stress to replenish this card with tokens (up to your Spellcast trait). At the end of each session, clear all unspent tokens."
          },
          {
            "id": "wall-walk",
            "name": "WALL WALK",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground. This lasts until the end of the scene or you cast Wall Walk again"
          },
          {
            "id": "cinder-grasp",
            "name": "CINDER GRASP",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Melee range. On a success, the target instantly bursts into flames, takes 1d20+3 magic damage, and is temporarily lit On Fire. When a creature acts while On Fire, they must take an extra 2d6 magic damage if they are still On Fire at the end of their action."
          },
          {
            "id": "floating-eye",
            "name": "FLOATING EYE",
            "level": 2,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Spend a Hope to create a single, small floating orb that you can move anywhere within Very Far range. While this spell is active, you can see through the orb as though you’re looking out from its position. You can transition between using your own senses and seeing through the orb freely. If the orb takes damage or moves out of range, the spell ends."
          },
          {
            "id": "counterspell",
            "name": "COUNTERSPELL",
            "level": 3,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can interrupt a magical effect taking place by making a reaction roll using your Spellcast trait. On a success, the effect stops and any consequences are avoided, and this card is placed in your vault."
          },
          {
            "id": "flight",
            "name": "FLIGHT",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). On a success, place a number of tokens equal to your Agility on this card (minimum 1). When you make an action roll while flying, spend a token from this card. After the action that spends the last token is resolved, you descend to the ground directly below you."
          },
          {
            "id": "blink-out",
            "name": "BLINK OUT",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (12). On a success, spend a Hope to teleport to another point you can see within Far range. If any willing creatures are within Very Close range, spend an additional Hope for each creature to bring them with you."
          },
          {
            "id": "preservation-blast",
            "name": "PRESERVATION BLAST",
            "level": 4,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all targets within Melee range. Targets you succeed against are forced back to Far range and take d8+3 magic damage using your Spellcast trait."
          },
          {
            "id": "chain-lightning",
            "name": "CHAIN LIGHTNING",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Mark 2 Stress to make a Spellcast Roll, unleashing lightning on all targets within Close range. Targets you succeed against must make a reaction roll with a Difficulty equal to the result of your Spellcast Roll. Targets who fail take 2d8+4 magic damage. Additional adversaries not already targeted by Chain Lightning and within Close range of previous targets who took damage must also make the reaction roll. Targets who fail take 2d8+4 magic damage. This chain continues until there are no more adversaries within range."
          },
          {
            "id": "premonition",
            "name": "PREMONITION",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "You can channel arcane energy to have visions of the future. Once per long rest, immediately after the GM conveys the consequences of a roll you made, you can rescind the move and consequences like they never happened and make another move instead."
          },
          {
            "id": "rift-walker",
            "name": "RIFT WALKER",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). On a success, you place an arcane marking on the ground where you currently stand. The next time you successfully cast Rift Walker, a rift in space opens up, providing safe passage back to the exact spot where the marking was placed. This rift stays open until you choose to close it or you cast another spell.\nYou can drop the spell at any time to cast Rift Walker again and place the marking somewhere new."
          },
          {
            "id": "telekinesis",
            "name": "TELEKINESIS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, you can use your mind to move them anywhere within Far range of their original position. You can throw the lifted target as an attack by making an additional Spellcast Roll against the second target you’re trying to attack. On a success, deal d12+4 physical damage to the second target using your Proficiency. This spell then ends."
          },
          {
            "id": "arcana-touched",
            "name": "ARCANA-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Arcana domain, gain the following benefits:\n  +1 bonus to your Spellcast Rolls\n  Once per rest, you can switch the results of your Hope and Fear Dice."
          },
          {
            "id": "cloaking-blast",
            "name": "CLOAKING BLAST",
            "level": 7,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "When you make a successful Spellcast Roll to cast a different spell, you can spend a Hope to become Cloaked. While Cloaked, you remain unseen if you are stationary when an adversary moves to where they would normally see you. When you move into or within an adversary’s line of sight or make an attack, you are no longer Cloaked."
          },
          {
            "id": "arcane-reflection",
            "name": "ARCANE REFLECTION",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you would take magic damage, you can spend any number of Hope to roll that many d6s. If any roll a 6, the attack is reflected back to the caster, dealing the damage to them instead."
          },
          {
            "id": "confusing-aura",
            "name": "CONFUSING AURA",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (14). Once per long rest on a success, you create a layer of illusion over your body that makes it hard to tell exactly where you are. Mark any number of Stress to make that many additional layers. When an adversary makes an attack against you, roll a number of d6s equal to the number of layers currently active. If any roll a 5 or higher, one layer of the aura is destroyed and the attack fails. If all the results are 4 or lower, you take the damage and this spell ends"
          },
          {
            "id": "earthquake",
            "name": "EARTHQUAKE",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per rest on a success, all targets within Very Far range who aren’t flying must make a Reaction Roll (18). Targets who fail take 3d10+8 physical damage and are temporarily Vulnerable. Targets who succeed take half damage.\nAdditionally, when you succeed on the Spellcast Roll, all terrain within Very Far range becomes difficult to move through and structures within this range might sustain damage or crumble."
          },
          {
            "id": "sensory-projection",
            "name": "SENSORY PROJECTION",
            "level": 9,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Once per rest, make a Spellcast Roll (15). On a success, drop into a vision that lets you clearly see and hear any place you have been before as though you are standing there in this moment. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means. You drop out of this vision upon taking damage or casting another spell."
          },
          {
            "id": "adjust-reality",
            "name": "ADJUST REALITY",
            "level": 10,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After you or a willing ally make any roll, you can spend 5 Hope to change the numerical result of that roll to a result of your choice instead. The result must be plausible within the range of the dice."
          },
          {
            "id": "falling-sky",
            "name": "FALLING SKY",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries within Far range. Mark any number of Stress to make shards of arcana rain down from above. Targets you succeed against take 1d20+2 magic damage for each Stress marked."
          }
        ]
      },
      {
        "id": "midnight",
        "name": "Midnight",
        "description": "Midnight is the domain of shadows and secrecy. Whether by clever tricks, deft magic, or the cloak of night, those who channel these forces practice the art of obscurity and can uncover sequestered treasures. Midnight offers practitioners the power to control and create enigmas.",
        "cards": [
          {
            "id": "pick-and-pull",
            "name": "PICK AND PULL",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "You have advantage on action rolls to pick nonmagical locks, disarm nonmagical traps, or steal items from a target (either through stealth or by force)."
          },
          {
            "id": "rain-of-blades",
            "name": "RAIN OF BLADES",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to make a Spellcast Roll and conjure throwing blades that strike out at all targets within Very Close range. Targets you succeed against take d8+2 magic damage using your Proficiency.\nIf a target you hit is Vulnerable, they take an extra 1d8 damage."
          },
          {
            "id": "uncanny-disguise",
            "name": "UNCANNY DISGUISE",
            "level": 1,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "When you have a few minutes to prepare, you can mark a Stress to don the facade of any humanoid you can picture clearly in your mind. While disguised, you have advantage on Presence Rolls to avoid scrutiny. Place a number of tokens equal to your Spellcast trait on this card. When you take an action while disguised, spend a token from this card. After the action that spends the last token is resolved, the disguise drops."
          },
          {
            "id": "midnight-spirit",
            "name": "MIDNIGHT SPIRIT",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to summon a humanoid-sized spirit that can move or carry things for you until your next rest, you cast Natural Familiar again, or the familiar is targeted by an attack. If you spend an additional Hope, you can summon a familiar that flies. You can communicate with them, make a Spellcast Roll to command them to perform simple tasks, and mark a Stress to see through their eyes. When you deal damage to an adversary within Melee range of your familiar, you add a d6 to your damage roll. You can only have one spirit at a time."
          },
          {
            "id": "shadowbind",
            "name": "SHADOWBIND",
            "level": 2,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against all adversaries within Very Close range. Targets you succeed against are temporarily Restrained as their shadow binds them in place."
          },
          {
            "id": "chokehold",
            "name": "CHOKEHOLD",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you position yourself behind a creature who’s about your size, you can mark a Stress to pull them into a chokehold, making them temporarily Vulnerable.\nWhen a creature attacks a target who is Vulnerable in this way, they deal an extra 2d6 damage."
          },
          {
            "id": "veil-of-night",
            "name": "VEIL OF NIGHT",
            "level": 3,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13). On a success, you can create a temporary curtain of darkness between two points within Far range. Only you can see through this darkness. You’re considered Hidden to adversaries on the other side of the veil, and you have advantage on attacks you make through the darkness. The veil remains until you cast another spell."
          },
          {
            "id": "stealth-expertise",
            "name": "STEALTH EXPERTISE",
            "level": 4,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you roll with Fear while attempting to move unnoticed through a dangerous area, you can mark a Stress to roll with Hope instead.\nIf an ally within Close range is also attempting to move unnoticed and rolls with Fear, you can mark a Stress to change their result to a roll with Hope."
          },
          {
            "id": "glyph-of-nightfall",
            "name": "GLYPH OF NIGHTFALL",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Very Close range. On a success, spend a Hope to conjure a dark glyph upon their body that exposes their weak points, temporarily reducing the target’s Difficulty by a value equal to your Knowledge (minimum 1)."
          },
          {
            "id": "hush",
            "name": "HUSH",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, spend a Hope to conjure suppressive magic around the target that encompasses everything within Very Close range of them and follows them as they move. The target and anything within the area is Silenced until the GM spends a Fear on their turn to clear this condition, you cast Hush again, or you take Major damage. While Silenced, they can’t make noise and can’t cast spells."
          },
          {
            "id": "phantom-retreat",
            "name": "PHANTOM RETREAT",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Spend a Hope to activate Phantom Retreat where you’re currently standing. Spend another Hope at any time before your next rest to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This spell ends after you reappear."
          },
          {
            "id": "dark-whispers",
            "name": "DARK WHISPERS",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "You can speak into the mind of any person with whom you’ve made physical contact. Once you’ve opened a channel with them, they can speak back into your mind. Additionally, you can mark a Stress to make a Spellcast Roll against them. On a success, you can ask the GM one of the following questions and receive an answer:\n  Where are they?\n  What are they doing?\n  What are they afraid of?\n  What do they cherish most in the world?"
          },
          {
            "id": "mass-disguise",
            "name": "MASS DISGUISE",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "When you have a few minutes of silence to focus, you can mark a Stress to change the appearance of all willing creatures within Close range. Their new forms must share a general body structure and size, and can be somebody or something you’ve seen before or entirely fabricated. A disguised creature has advantage on Presence Rolls to avoid scrutiny. Activate a Countdown (8). It ticks down as a consequence the GM chooses. When it triggers, the disguise drops."
          },
          {
            "id": "midnight-touched",
            "name": "MIDNIGHT-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Midnight domain, gain the following benefits:\n  Once per rest, when you have 0 Hope and the GM would gain a Fear, you can gain a Hope instead.\n  When you make a successful attack, you can mark a Stress to add the result of your Fear Die to your damage roll."
          },
          {
            "id": "vanishing-dodge",
            "name": "VANISHING DODGE",
            "level": 7,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When an attack made against you that would deal physical damage fails, you can spend a Hope to envelop yourself in shadow, becoming Hidden and teleporting to a point within Close range of the attacker. You remain Hidden until the next time you make an action roll."
          },
          {
            "id": "shadowhunter",
            "name": "SHADOWHUNTER",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Your prowess is enhanced under the cover of shadow. While you’re shrouded in low light or darkness, you gain a +1 bonus to your Evasion and make attack rolls with advantage."
          },
          {
            "id": "spellcharge",
            "name": "SPELLCHARGE",
            "level": 8,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you take magic damage, place tokens equal to the number of Hit Points you marked on this card. You can store a number of tokens equal to your Spellcast trait. When you make a successful attack against a target, you can spend any number of tokens to add a d6 for each token spent to your damage roll."
          },
          {
            "id": "night-terror",
            "name": "NIGHT TERROR",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, choose any targets within Very Close range to perceive you as a nightmarish horror. The targets must succeed on a Reaction Roll (16) or become temporarily Horrified. While Horrified, they’re Vulnerable. Steal a number of Fear from the GM equal to the number of targets that are Horrified (up to the number of Fear in the GM’s pool). Roll a number of d6s equal to the number of stolen Fear and deal the total damage to each Horrified target. Discard the stolen Fear."
          },
          {
            "id": "twilight-toll",
            "name": "TWILIGHT TOLL",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Choose a target within Far range. When you succeed on an action roll against them that doesn’t result in making a damage roll, place a token on this card. When you deal damage to this target, spend any number of tokens to add a d12 for each token spent to your damage roll. You can only hold Twilight Toll on one creature at a time. When you choose a new target or take a rest, clear all unspent tokens."
          },
          {
            "id": "eclipse",
            "name": "ECLIPSE",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per long rest on a success, plunge the entire area within Far range into complete darkness only you and your allies can see through. Attack rolls have disadvantage when targeting you or an ally within this shadow. Additionally, when you or an ally succeeds with Hope against an adversary within this shadow, the target must mark a Stress. This spell lasts until the GM spends a Fear on their turn to clear this effect or you take Severe damage."
          },
          {
            "id": "specter-of-the-dark",
            "name": "SPECTER OF THE DARK",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Mark a Stress to become Spectral until you make an action roll targeting another creature. While Spectral, you’re immune to physical damage and can float and pass through solid objects. Other creatures can still see you while you’re in this form."
          }
        ]
      }
    ],
    "background_questions": [
      "What did you do that made the people in your community wary of you?",
      "What mentor taught you to control your untamed magic, and why are they no longer able to guide you?",
      "You have a deep fear you hide from everyone. What is it, and why does it scare you?"
    ],
    "connections": [
      "Why do you trust me so deeply?",
      "What did I do that makes you cautious around me?",
      "Why do we keep our shared past a secret?"
    ]
  },
  "warrior": {
    "id": "warrior",
    "name": "Warrior",
    "description": "Becoming a warrior requires years, often a lifetime, of training and dedication to the mastery of weapons and violence. While many who seek to fight hone only their strength, warriors understand the importance of an agile body and mind, making them some of the most sought-after fighters across the realms. Frequently, warriors find employment within an army, a band of mercenaries, or even a royal guard, but their potential is wasted in any position where they cannot continue to improve and expand their skills. Warriors are known to have a favored weapon; to come between them and their blade would be a grievous mistake.",
    "starting_evasion": 11,
    "starting_hit_points": 6,
    "class_items": [
      "The drawing of a lover",
      "A sharpening stone"
    ],
    "class_features": [
      {
        "name": "Attack of Opportunity",
        "feature": "If an adversary within Melee range attempts to leave that range, make a reaction roll using a trait of your choice against their Difficulty. Choose one effect on a success, or two if you critically succeed:\n- They can’t move from where they are.\n- You deal damage to them equal to your primary\n- weapon’s damage.\n- You move with them."
      },
      {
        "name": "Combat Training",
        "feature": "You ignore burden when equipping weapons. When you deal physical damage, you gain a bonus to your damage roll equal to your level."
      }
    ],
    "hope_feature": {
      "name": "No Mercy",
      "feature": "Spend 3 Hope to gain a +1 bonus to your attack rolls until your next rest."
    },
    "subclasses": [
      {
        "name": "Call of the Brave",
        "description": "Play the Call of the Brave if you want to use the might of your enemies to fuel your own power.",
        "foundation_features": [
          {
            "name": "Courage",
            "feature": "When you fail a roll with Fear, you gain a Hope."
          },
          {
            "name": "Battle Ritual",
            "feature": "Once per long rest, before you attempt something incredibly dangerous or face off against a foe who clearly outmatches you, describe what ritual you perform or preparations you make. When you do, clear 2 Stress and gain 2 Hope."
          }
        ],
        "specialization_features": [
          {
            "name": "Rise to the Challenge",
            "feature": "You are vigilant in the face of mounting danger. While you have 2 or fewer Hit Points unmarked, you can roll a d20 as your Hope Die."
          }
        ],
        "mastery_features": [
          {
            "name": "Camaraderie",
            "feature": "Your unwavering bravery is a rallying point for your allies. You can initiate a Tag Team Roll one additional time per session. Additionally, when an ally initiates a Tag Team Roll with you, they only need to spend 2 Hope to do so."
          }
        ]
      },
      {
        "name": "Call of the Slayer",
        "description": "Play the Call of the Slayer if you want to strike down adversaries with immense force.",
        "foundation_features": [
          {
            "name": "Slayer",
            "feature": "You gain a pool of dice called Slayer Dice. On a roll with Hope, you can place a d6 on this card instead of gaining a Hope, adding the die to the pool. You can store a number of Slayer Dice equal to your Proficiency. When you make an attack roll or damage roll, you can spend any number of these Slayer Dice, rolling them and adding their result to the roll. At the end of each session, clear any unspent Slayer Dice on this card and gain a Hope per die cleared."
          }
        ],
        "specialization_features": [
          {
            "name": "Weapon Specialist",
            "feature": "You can wield multiple weapons with dangerous ease. When you succeed on an attack, you can spend a Hope to add one of the damage dice from your secondary weapon to the damage roll. Additionally, once per long rest when you roll your Slayer Dice, reroll any 1s."
          }
        ],
        "mastery_features": [
          {
            "name": "Martial Preparation",
            "feature": "You’re an inspirational warrior to all who travel with you. Your party gains access to the Martial Preparation downtime move. To use this move during a rest, describe how you instruct and train with your party. You and each ally who chooses this downtime move gain a d6 Slayer Die. A PC with a Slayer Die can spend it to roll the die and add the result to an attack or damage roll of their choice."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "blade",
        "name": "Blade",
        "description": "Blade is the domain of weapon mastery. Whether by steel, bow, or perhaps a more specialized arm, those who follow this path have the skill to cut short the lives of others. Wielders of Blade dedicate themselves to achieving inexorable power over death.",
        "cards": [
          {
            "id": "get-back-up",
            "name": "GET BACK UP",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you take Severe damage, you can mark a Stress to reduce the severity by one threshold."
          },
          {
            "id": "not-good-enough",
            "name": "NOT GOOD ENOUGH",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you roll your damage dice, you can reroll any 1s or 2s."
          },
          {
            "id": "whirlwind",
            "name": "WHIRLWIND",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a successful attack against a target within Very Close range, you can spend a Hope to use the attack against all other targets within Very Close range. All additional adversaries you succeed against with this ability take half damage."
          },
          {
            "id": "a-soldier’s-bond",
            "name": "A SOLDIER’S BOND",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per long rest, when you compliment someone or ask them about something they’re good at, you can both gain 3 Hope."
          },
          {
            "id": "reckless",
            "name": "RECKLESS",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Mark a Stress to gain advantage on an attack."
          },
          {
            "id": "scramble",
            "name": "SCRAMBLE",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Once per rest, when a creature within Melee range would deal damage to you, you can avoid the attack and safely move out of Melee range of the enemy."
          },
          {
            "id": "versatile-fighter",
            "name": "VERSATILE FIGHTER",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You can use a different character trait for an equipped weapon, rather than the trait the weapon calls for.\nWhen you deal damage, you can mark a Stress to use the maximum result of one of your damage dice instead of rolling it."
          },
          {
            "id": "deadly-focus",
            "name": "DEADLY FOCUS",
            "level": 4,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per rest, you can apply all your focus toward a target of your choice. Until you attack another creature, you defeat the target, or the battle ends, gain a +1 bonus to your Proficiency."
          },
          {
            "id": "fortified-armor",
            "name": "FORTIFIED ARMOR",
            "level": 4,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "While you are wearing armor, gain a +2 bonus to your damage thresholds."
          },
          {
            "id": "champion’s-edge",
            "name": "CHAMPION’S EDGE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you critically succeed on an attack, you can spend up to 3 Hope and choose one of the following options for each Hope spent:\n  You clear a Hit Point.\n  You clear an Armor Slot.\n  The target must mark an additional Hit Point.\nYou can’t choose the same option more than once."
          },
          {
            "id": "vitality",
            "name": "VITALITY",
            "level": 5,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you choose this card, permanently gain two of the following benefits:\n  One Stress slot\n  One Hit Point slot\n  +2 bonus to your damage thresholds Then place this card in your vault permanently."
          },
          {
            "id": "battle-hardened",
            "name": "BATTLE-HARDENED",
            "level": 6,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per long rest when you would make a Death Move, you can spend a Hope to clear a Hit Point instead."
          },
          {
            "id": "rage-up",
            "name": "RAGE UP",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Before you make an attack, you can mark a Stress to gain a bonus to your damage roll equal to twice your Strength. You can Rage Up twice per attack."
          },
          {
            "id": "blade-touched",
            "name": "BLADE-TOUCHED",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Blade domain, gain the following benefits:\n  +2 bonus to your attack rolls\n  +4 bonus to your Severe damage threshold"
          },
          {
            "id": "glancing-blow",
            "name": "GLANCING BLOW",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you fail an attack, you can mark a Stress to deal weapon damage using half your Proficiency."
          },
          {
            "id": "battle-cry",
            "name": "BATTLE CRY",
            "level": 8,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per long rest, while you’re charging into danger, you can muster a rousing call that inspires your allies. All allies who can hear you each clear a Stress and gain a Hope. Additionally, your allies gain advantage on attack rolls until you or an ally rolls a failure with Fear."
          },
          {
            "id": "frenzy",
            "name": "FRENZY",
            "level": 8,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Once per long rest, you can go into a Frenzy until there are no more adversaries within sight.\nWhile Frenzied, you can’t use Armor Slots, and you gain a +10 bonus to your damage rolls and a +8 bonus to your Severe damage threshold."
          },
          {
            "id": "gore-and-glory",
            "name": "GORE AND GLORY",
            "level": 9,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you critically succeed on a weapon attack, gain an additional Hope or clear an additional Stress.\nAdditionally, when you deal enough damage to defeat an enemy, gain a Hope or clear a Stress."
          },
          {
            "id": "reaper’s-strike",
            "name": "REAPER’S STRIKE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Once per long rest, spend a Hope to make an attack roll. The GM tells you which targets within range it would succeed against. Choose one of these targets and force them to mark 5 Hit Points."
          },
          {
            "id": "battle-monster",
            "name": "BATTLE MONSTER",
            "level": 10,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When you make a successful attack against an adversary, you can mark 4 Stress to force the target to mark a number of Hit Points equal to the number of Hit Points you currently have marked instead of rolling for damage."
          },
          {
            "id": "onslaught",
            "name": "ONSLAUGHT",
            "level": 10,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you successfully make an attack with your weapon, you never deal damage beneath a target’s Major damage threshold (the target always marks a minimum of 2 Hit Points). Additionally, when a creature within your weapon’s range deals damage to an ally with an attack that doesn’t include you, you can mark a Stress to force them to make a Reaction Roll (15). On a failure, the target must mark a Hit Point."
          }
        ]
      },
      {
        "id": "bone",
        "name": "Bone",
        "description": "Bone is the domain of tactics and the body. Practitioners of this domain have an uncanny control over their own physical abilities and an eye for predicting the behaviors of others in combat. Adherents to Bone gain an unparalleled understanding of bodies and their movements.",
        "cards": [
          {
            "id": "deft-maneuvers",
            "name": "DEFT MANEUVERS",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Once per rest, mark a Stress to sprint anywhere within Far range without making an Agility Roll to get there. If you end this movement within Melee range of an adversary and immediately make an attack against them, gain a +1 bonus to the attack roll."
          },
          {
            "id": "i-see-it-coming",
            "name": "I SEE IT COMING",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you’re targeted by an attack made from beyond Melee range, you can mark a Stress to roll a d4 and gain a bonus to your Evasion equal to the result against the attack."
          },
          {
            "id": "untouchable",
            "name": "UNTOUCHABLE",
            "level": 1,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Gain a bonus to your Evasion equal to half your Agility."
          },
          {
            "id": "ferocity",
            "name": "FEROCITY",
            "level": 2,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When you cause an adversary to mark 1 or more Hit Points, you can spend 2 Hope to increase your Evasion by the number of Hit Points they marked. This bonus lasts until after the next attack made against you."
          },
          {
            "id": "strategic-approach",
            "name": "STRATEGIC APPROACH",
            "level": 2,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "After a long rest, place a number of tokens equal to your Knowledge on this card (minimum 1). The first time you move within Close range of an adversary and make an attack against them, you can spend one token to choose one of the following options:\n  You make the attack with advantage.\n  You clear a Stress on an ally within Melee range of the adversary.\n  You add a d8 to your damage roll. When you take a long rest, clear all unspent tokens."
          },
          {
            "id": "brace",
            "name": "BRACE",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you mark an Armor Slot to reduce incoming damage, you can mark a Stress to mark an additional Armor Slot."
          },
          {
            "id": "tactician",
            "name": "TACTICIAN",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you Help an Ally, they can spend a Hope to add one of your Experiences to their roll alongside your advantage die.\nWhen making a Tag Team Roll, you can roll a d20 as your Hope Die."
          },
          {
            "id": "boost",
            "name": "BOOST",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Mark a Stress to boost off a willing ally within Close range, fling yourself into the air, and perform an aerial attack against a target within Far range. You have advantage on the attack, add a d10 to the damage roll, and end your move within Melee range of the target."
          },
          {
            "id": "redirect",
            "name": "REDIRECT",
            "level": 4,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When an attack made against you from beyond Melee range fails, roll a number of d6s equal to your Proficiency. If any roll a 6, you can mark a Stress to redirect the attack to damage an adversary within Very Close range instead."
          },
          {
            "id": "know-thy-enemy",
            "name": "KNOW THY ENEMY",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When observing a creature, you can make an Instinct Roll against them. On a success, spend a Hope and ask the GM for one set of information about the target from the following options:\n  Their unmarked Hit Points and Stress.\n  Their Difficulty and damage thresholds.\n  Their tactics and standard attack damage dice.\n  Their features and Experiences. Additionally on a success, you can mark a Stress to remove a Fear from the GM’s Fear Pool."
          },
          {
            "id": "signature-move",
            "name": "SIGNATURE MOVE",
            "level": 5,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Name and describe your signature combat move. Once per rest, when you perform this signature move as part of an action you’re taking, you can roll a d20 as your Hope Die. On a success, clear a Stress."
          },
          {
            "id": "rapid-riposte",
            "name": "RAPID RIPOSTE",
            "level": 6,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "When an attack made against you from within Melee range fails, you can mark a Stress and seize the opportunity to deal the weapon damage of one of your active weapons to the attacker."
          },
          {
            "id": "recovery",
            "name": "RECOVERY",
            "level": 6,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "During a short rest, you can choose a long rest downtime move instead. You can spend a Hope to let an ally do the same."
          },
          {
            "id": "bone-touched",
            "name": "BONE-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Bone domain, gain the following benefits:\n  +1 bonus to Agility\n  Once per rest, you can spend 3 Hope to cause an attack that succeeded against you to fail instead."
          },
          {
            "id": "cruel-precision",
            "name": "CRUEL PRECISION",
            "level": 7,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you make a successful attack with a weapon, gain a bonus to your damage roll equal to either your Finesse or Agility."
          },
          {
            "id": "breaking-blow",
            "name": "BREAKING BLOW",
            "level": 8,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "When you make a successful attack, you can mark a Stress to make the next successful attack against that same target deal an extra 2d12 damage."
          },
          {
            "id": "wrangle",
            "name": "WRANGLE",
            "level": 8,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "Make an Agility Roll against all targets within Close range. Spend a Hope to move targets you succeed against, and any willing allies within Close range, to another point within Close range."
          },
          {
            "id": "on-the-brink",
            "name": "ON THE BRINK",
            "level": 9,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "When you have 2 or fewer Hit Points unmarked, you don’t take Minor damage."
          },
          {
            "id": "splintering-strike",
            "name": "SPLINTERING STRIKE",
            "level": 9,
            "recall_cost": 3,
            "type": "Ability",
            "feature": "Spend a Hope and make an attack against all adversaries within your weapon’s range. Once per long rest, on a success against any targets, add up the damage dealt, then redistribute that damage however you wish between the targets you succeeded against. When you deal damage to a target, roll an additional damage die and add its result to the damage you deal to that target."
          },
          {
            "id": "swift-step",
            "name": "SWIFT STEP",
            "level": 10,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When an attack made against you fails, clear a Stress. If you can’t clear a Stress, gain a Hope."
          }
        ]
      }
    ],
    "background_questions": [
      "Who taught you to fight, and why did they stay behind when you left home?",
      "Somebody defeated you in battle years ago and left you to die. Who was it, and how did they betray you?",
      "What legendary place have you always wanted to visit, and why is it so special?"
    ],
    "connections": [
      "We knew each other long before this party came together. How?",
      "What mundane task do you usually help me with off the battlefield?",
      "What fear am I helping you overcome?"
    ]
  },
  "wizard": {
    "id": "wizard",
    "name": "Wizard",
    "description": "Whether through an institution or individual study, those known as wizards acquire and hone immense magical power over years of learning using a variety of tools, including books, stones, potions, and herbs. Some wizards dedicate their lives to mastering a particular school of magic, while others learn from a wide variety of disciplines. Many wizards become wise and powerful figures in their communities, advising rulers, providing medicines and healing, and even leading war councils. While these mages all work toward the common goal of collecting magical knowledge, wizards often have the most conflict within their own ranks, as the acquisition, keeping, and sharing of powerful secrets is a topic of intense debate that has resulted in innumerable deaths.",
    "starting_evasion": 11,
    "starting_hit_points": 5,
    "class_items": [
      "A book you’re trying to translate",
      "A tiny, harmless elemental pet"
    ],
    "class_features": [
      {
        "name": "Prestidigitation",
        "feature": "You can perform harmless, subtle magical effects at will. For example, you can change an object’s color, create a smell, light a candle, cause a tiny object to float, illuminate a room, or repair a small object."
      },
      {
        "name": "Strange Patterns",
        "feature": "Choose a number between 1 and 12. When you roll that number on a Duality Die, gain a Hope or clear a Stress.\nYou can change this number when you take a long rest."
      }
    ],
    "hope_feature": {
      "name": "Not This Time",
      "feature": "Spend 3 Hope to force an adversary within Far range to reroll an attack or damage roll."
    },
    "subclasses": [
      {
        "name": "School of Knowledge",
        "description": "Play the School of Knowledge if you want a keen understanding of the world around you.",
        "spellcast_trait": "Knowledge",
        "foundation_features": [
          {
            "name": "Prepared",
            "feature": "Take an additional domain card of your level or lower from a domain you have access to."
          },
          {
            "name": "Adept",
            "feature": "When you Utilize an Experience, you can mark a Stress instead of spending a Hope. If you do, double your Experience modifier for that roll."
          }
        ],
        "specialization_features": [
          {
            "name": "Accomplished",
            "feature": "Take an additional domain card of your level or lower from a domain you have access to."
          },
          {
            "name": "Perfect Recall",
            "feature": "Once per rest, when you recall a domain card in your vault, you can reduce its Recall Cost by 1."
          }
        ],
        "mastery_features": [
          {
            "name": "Brilliant",
            "feature": "Take an additional domain card of your level or lower from a domain you have access to."
          },
          {
            "name": "Honed Expertise",
            "feature": "When you use an Experience, roll a d6. On a result of 5 or higher, you can use it without spending Hope."
          }
        ]
      },
      {
        "name": "School of War",
        "description": "Play the School of War if you want to utilize trained magic for violence.",
        "spellcast_trait": "Knowledge",
        "foundation_features": [
          {
            "name": "Battlemage",
            "feature": "You’ve focused your studies on becoming an unconquerable force on the battlefield. Gain an additional Hit Point slot."
          },
          {
            "name": "Face Your Fear",
            "feature": "When you succeed with Fear on an attack roll, you deal an extra 1d10 magic damage."
          }
        ],
        "specialization_features": [
          {
            "name": "Conjure Shield",
            "feature": "You can maintain a protective barrier of magic. While you have at least 2 Hope, you add your Proficiency to your Evasion."
          },
          {
            "name": "Fueled by Fear",
            "feature": "The extra magic damage from your “Face Your Fear” feature increases to 2d10."
          }
        ],
        "mastery_features": [
          {
            "name": "Thrive in Chaos",
            "feature": "When you succeed on an attack, you can mark a Stress after rolling damage to force the target to mark an additional Hit Point."
          },
          {
            "name": "Have No Fear",
            "feature": "The extra magic damage from your “Face Your Fear” feature increases to 3d10."
          }
        ]
      }
    ],
    "domains": [
      {
        "id": "codex",
        "name": "Codex",
        "description": "Codex is the domain of intensive magical study. Those who seek magical knowledge turn to the equations of power recorded in books, written on scrolls, etched into walls, or tattooed on bodies. Codex offers a commanding and versatile understanding of magic to devotees who pursue knowledge beyond the boundaries of common wisdom.",
        "cards": [
          {
            "id": "book-of-ava",
            "name": "BOOK OF AVA",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Power Push: Make a Spellcast Roll against a target within Melee range. On a success, they’re knocked back to Far range and take d10+2 magic damage using your Proficiency.\nTava’s Armor: Spend a Hope to give a target you can touch a +1 bonus to their Armor Score until their next rest or you cast Tava’s Armor again.\nIce Spike: Make a Spellcast Roll (12) to summon a large ice spike within Far range. If you use it as a weapon, make the Spellcast Roll against the target’s Difficulty instead. On a success, deal d6 physical damage using your Proficiency."
          },
          {
            "id": "book-of-illiat",
            "name": "BOOK OF ILLIAT",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Slumber: Make a Spellcast Roll against a target within Very Close range. On a success, they’re Asleep until they take damage or the GM spends a Fear on their turn to clear this condition. Arcane Barrage: Once per rest, spend any number of Hope and shoot magical projectiles that strike a target of your choice within Close range. Roll a number of d6s equal to the Hope spent and deal that much magic damage to the target. Telepathy: Spend a Hope to open a line of mental communication with one target you can see. This connection lasts until your next rest or you cast Telepathy again."
          },
          {
            "id": "book-of-tyfar",
            "name": "BOOK OF TYFAR",
            "level": 1,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Wild Flame: Make a Spellcast Roll against up to three adversaries within Melee range. Targets you succeed against take 2d6 magic damage and must mark a Stress as flames erupt from your hand. Magic Hand: You conjure a magical hand with the same size and strength as your own within Far range. Mysterious Mist: Make a Spellcast Roll (13) to cast a temporary thick fog that gathers in a stationary area within Very Close range. The fog heavily obscures this area and everything in it."
          },
          {
            "id": "book-of-sitil",
            "name": "BOOK OF SITIL",
            "level": 2,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Adjust Appearance: You magically shift your appearance and clothing to avoid recognition.\nParallela: Spend 2 Hope to cast this spell on yourself or an ally within Close range. The next time the target makes an attack, they can hit an additional target within range that their attack roll would succeed against. You can only hold this spell on one creature at a time.\nIllusion: Make a Spellcast Roll (14). On a success, create a temporary visual illusion no larger than you within Close range that lasts for as long as you look at it. It holds up to scrutiny until an observer is within Melee range."
          },
          {
            "id": "book-of-vagras",
            "name": "BOOK OF VAGRAS",
            "level": 2,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Runic Lock: Make a Spellcast Roll (15) on an object you’re touching that can close (such as a lock, chest, or box). Once per rest on a success, you can lock the object so it can only be opened by creatures of your choice. Someone with access to magic and an hour of time to study the spell can break it.\nArcane Door: When you have no adversaries within Melee range, make a Spellcast Roll (13). On a success, spend a Hope to create a portal from where you are to a point within Far range you can see. It closes once a creature has passed through it.\nReveal: Make a Spellcast Roll. If there is anything magically hidden within Close range, it is revealed."
          },
          {
            "id": "book-of-korvax",
            "name": "BOOK OF KORVAX",
            "level": 3,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Levitation: Make a Spellcast Roll to temporarily lift a target you can see up into the air and move them within Close range of their original position. Recant: Spend a Hope to force a target within Melee range to make a Reaction Roll (15). On a failure, they forget the last minute of your conversation. Rune Circle: Mark a Stress to create a temporary magical circle on the ground where you stand. All adversaries within Melee range, or who enter Melee range, take 2d12+4 magic damage and are knocked back to Very Close range."
          },
          {
            "id": "book-of-norai",
            "name": "BOOK OF NORAI",
            "level": 3,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Mystic Tether: Make a Spellcast Roll against a target within Far range. On a success, they’re temporarily Restrained and must mark a Stress. If you target a flying creature, this spell grounds and temporarily Restrains them. Fireball: Make a Spellcast Roll against a target within Very Far range. On a success, hurl a sphere of fire toward them that explodes on impact. The target and all creatures within Very Close range of them must make a Reaction Roll (13). Targets who fail take d20+5 magic damage using your Proficiency. Targets who succeed take half damage."
          },
          {
            "id": "book-of-exota",
            "name": "BOOK OF EXOTA",
            "level": 4,
            "recall_cost": 3,
            "type": "Grimoire",
            "feature": "Repudiate: You can interrupt a magical effect taking place. Make a reaction roll using your Spellcast trait. Once per rest on a success, the effect stops and any consequences are avoided.\nCreate Construct: Spend a Hope to choose a group of objects around you and create an animated construct from them that obeys basic commands. Make a Spellcast Roll to command them to take action. When necessary, they share your Evasion and traits and their attacks deal 2d10+3 physical damage. You can only maintain one construct at a time, and they fall apart when they take any amount of damage."
          },
          {
            "id": "book-of-grynn",
            "name": "BOOK OF GRYNN",
            "level": 4,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Arcane Deflection: Once per long rest, spend a Hope to negate the damage of an attack targeting you or an ally within Very Close range.\nTime Lock: Target an object within Far range. That object stops in time and space exactly where it is until your next rest. If a creature tries to move it, make a Spellcast Roll against them to maintain this spell.\nWall of Flame: Make a Spellcast Roll (15). On a success, create a a wall of magical flame between two points within Far range. All creatures in its path must choose a side to be on, and anything that subsequently passes through the wall takes 4d10+3 magic damage."
          },
          {
            "id": "manifest-wall",
            "name": "MANIFEST WALL",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15). Once per rest on a success, spend a Hope to create a temporary magical wall between two points within Far range. It can be up to 50 feet high and form at any angle. Creatures or objects in its path are shunted to a side of your choice. The wall stays up until your next rest or you cast Manifest Wall again."
          },
          {
            "id": "teleport",
            "name": "TELEPORT",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per long rest, you can instantly teleport yourself and any number of willing targets within Close range to a place you’ve been before. Choose one of the following options, then make a Spellcast Roll (16):\n  If you know the place very well, gain a +3 bonus.\n  If you’ve visited the place frequently, gain a +1 bonus.\n  If you’ve visited the place infrequently, gain no modifier.\n  If you’ve only been there once, gain a −2 penalty. On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure determining how far off course."
          },
          {
            "id": "banish",
            "name": "BANISH",
            "level": 6,
            "recall_cost": 0,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Close range. On a success, roll a number of d20s equal to your Spellcast trait. The target must make a reaction roll with a Difficulty equal to your highest result. On a success, the target must mark a Stress but isn’t banished. Once per rest on a failure, they are banished from this realm.\nWhen the PCs roll with Fear, the Difficulty gains a −1 penalty and the target makes another reaction roll. On a success, they return from banishment."
          },
          {
            "id": "sigil-of-retribution",
            "name": "SIGIL OF RETRIBUTION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark an adversary within Close range with a sigil of retribution. The GM gains a Fear. When the marked adversary deals damage to you or your allies, place a d8 on this card. You can hold a number of d8s equal to your level. When you successfully attack the marked adversary, roll the dice on this card and add the total to your damage roll, then clear the dice. This effect ends when the marked adversary is defeated or you cast Sigil of Retribution again."
          },
          {
            "id": "book-of-homet",
            "name": "BOOK OF HOMET",
            "level": 7,
            "recall_cost": 0,
            "type": "Grimoire",
            "feature": "Pass Through: Make a Spellcast Roll (13). Once per rest on a success, you and all creatures touching you can pass through a wall or door within Close range. The effect ends once everyone is on the other side.\nPlane Gate: Make a Spellcast Roll (14). Once per long rest on a success, open a gateway to a location in another dimension or plane of existence you’ve been to before. This gateway lasts until your next rest."
          },
          {
            "id": "codex-touched",
            "name": "CODEX-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Codex domain, gain the following benefits:\n  You can mark a Stress to add your Proficiency to a Spellcast Roll.\n  Once per rest, replace this card with any card from your vault without paying its Recall Cost."
          },
          {
            "id": "book-of-vyola",
            "name": "BOOK OF VYOLA",
            "level": 8,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Memory Delve: Make a Spellcast Roll against a target within Far range. On a success, peer into the target’s mind and ask the GM a question. The GM describes any memories the target has pertaining to the answer. Shared Clarity: Once per long rest, spend a Hope to choose two willing creatures. When one of them would mark Stress, they can choose between the two of them who marks it. This spell lasts until their next rest."
          },
          {
            "id": "safe-haven",
            "name": "SAFE HAVEN",
            "level": 8,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "When you have a few minutes of calm to focus, you can spend 2 Hope to summon your Safe Haven, a large interdimensional home where you and your allies can take shelter. When you do, a magical door appears somewhere within Close range. Only creatures of your choice can enter. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.\nWhen you take a rest within your own Safe Haven, you can choose an additional downtime move."
          },
          {
            "id": "book-of-ronin",
            "name": "BOOK OF RONIN",
            "level": 9,
            "recall_cost": 4,
            "type": "Grimoire",
            "feature": "Transform: Make a Spellcast Roll (15). On a success, transform into an inanimate object no larger than twice your normal size. You can remain in this shape until you take damage.\nEternal Enervation: Once per long rest, make a Spellcast Roll against a target within Close range. On a success, they become permanently Vulnerable. They can’t clear this condition by any means."
          },
          {
            "id": "disintegration-wave",
            "name": "DISINTEGRATION WAVE",
            "level": 9,
            "recall_cost": 4,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (18). Once per long rest on a success, the GM tells you which adversaries within Far range have a Difficulty of 18 or lower. Mark a Stress for each one you wish to hit with this spell. They are killed and can’t come back to life by any means."
          },
          {
            "id": "book-of-yarrow",
            "name": "BOOK OF YARROW",
            "level": 10,
            "recall_cost": 2,
            "type": "Grimoire",
            "feature": "Timejammer: Make a Spellcast Roll (18). On a success, time temporarily slows to a halt for everyone within Far range except for you. It resumes the next time you make an action roll that targets another creature."
          },
          {
            "id": "magic-immunity",
            "name": "MAGIC IMMUNITY",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Spend 5 Hope to become immune to magic damage until your next rest."
          },
          {
            "id": "transcendent-union",
            "name": "TRANSCENDENT UNION",
            "level": 10,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per long rest, spend 5 Hope to cast this spell on two or more willing creatures. Until your next rest, when a creature connected by this union would mark Stress or Hit Points, the connected creatures can choose who marks it."
          }
        ]
      },
      {
        "id": "splendor",
        "name": "Splendor",
        "description": "Splendor is the domain of life. Through this magic, followers gain the ability to heal and, to an extent, control death. Splendor offers its disciples the magnificent ability to both give and end life.",
        "cards": [
          {
            "id": "bolt-beacon",
            "name": "BOLT BEACON",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll against a target within Far range. On a success, spend a Hope to send a bolt of shimmering light toward them, dealing d8+2 magic damage using your Proficiency. The target becomes temporarily Vulnerable and glows brightly until this condition is cleared."
          },
          {
            "id": "mending-touch",
            "name": "MENDING TOUCH",
            "level": 1,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "You lay your hands upon a creature and channel healing magic to close their wounds. When you can take a few minutes to focus on the target you’re helping, you can spend 2 Hope to clear a Hit Point or a Stress on them. Once per long rest, when you spend this healing time learning something new about them or revealing something about yourself, you can clear 2 Hit Points or 2 Stress on them instead."
          },
          {
            "id": "reassurance",
            "name": "REASSURANCE",
            "level": 1,
            "recall_cost": 0,
            "type": "Ability",
            "feature": "Once per rest, after an ally attempts an action roll but before the consequences take place, you can offer assistance or words of support. When you do, your ally can reroll their dice."
          },
          {
            "id": "final-words",
            "name": "FINAL WORDS",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "You can infuse a corpse with a moment of life to speak with it. Make a Spellcast Roll (13). On a success with Hope, the corpse answers up to three questions. On a success with Fear, the corpse answers one question. The corpse answers truthfully, but it can’t impart information it didn’t know in life. On a failure, or once the corpse has finished answering your questions, the body turns to dust."
          },
          {
            "id": "healing-hands",
            "name": "HEALING HANDS",
            "level": 2,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (13) and target a creature other than yourself within Melee range. On a success, mark a Stress to clear 2 Hit Points or 2 Stress on the target. On a failure, mark a Stress to clear a Hit Point or a Stress on the target. You can’t heal the same target again until your next long rest."
          },
          {
            "id": "second-wind",
            "name": "SECOND WIND",
            "level": 3,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "Once per rest, when you succeed on an attack against an adversary, you can clear 3 Stress or a Hit Point. On a success with Hope, you also clear 3 Stress or a Hit Point on an ally within Close range of you."
          },
          {
            "id": "voice-of-reason",
            "name": "VOICE OF REASON",
            "level": 3,
            "recall_cost": 1,
            "type": "Ability",
            "feature": "You speak with an unmatched power and authority. You have advantage on action rolls to de-escalate violent situations or convince someone to follow your lead. Additionally, you’re emboldened in moments of duress. When all of your Stress slots are marked, you gain a +1 bonus to your Proficiency for damage rolls."
          },
          {
            "id": "divination",
            "name": "DIVINATION",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Once per long rest, spend 3 Hope to reach out to the forces beyond and ask one “yes or no” question about an event, person, place, or situation in the near future. For a moment, the present falls away and you see the answer before you."
          },
          {
            "id": "life-ward",
            "name": "LIFE WARD",
            "level": 4,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend 3 Hope and choose an ally within Close range. They are marked with a glowing sigil of protection. When this ally would make a death move, they clear a Hit Point instead. This effect ends when it saves the target from a death move, you cast Life Ward on another target, or you take a long rest."
          },
          {
            "id": "shape-material",
            "name": "SHAPE MATERIAL",
            "level": 5,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "Spend a Hope to shape a section of natural material you’re touching (such as stone, ice, or wood) to suit your purpose. The area of the material can be no larger than you. For example, you can form a rudimentary tool or create a door. You can only affect the material within Close range of where you’re touching it."
          },
          {
            "id": "smite",
            "name": "SMITE",
            "level": 5,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Once per rest, spend 3 Hope to charge your powerful smite. When you next successfully attack with a weapon, double the result of your damage roll. This attack deals magic damage regardless of the weapon’s damage type."
          },
          {
            "id": "restoration",
            "name": "RESTORATION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "After a long rest, place a number of tokens equal to your Spellcast trait on this card. Touch a creature and spend any number of tokens to clear 2 Hit Points or 2 Stress for each token spent.\nYou can also spend a token from this card when touching a creature to clear the Vulnerable condition or heal a physical or magical ailment (the GM might require additional tokens depending on the strength of the ailment).\nWhen you take a long rest, clear all unspent tokens."
          },
          {
            "id": "zone-of-protection",
            "name": "ZONE OF PROTECTION",
            "level": 6,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). Once per long rest on a success, choose a point within Far range and create a visible zone of protection there for all allies within Very Close range of that point. When you do, place a d6 on this card with the 1 value facing up. When an ally in this zone takes damage, they reduce it by the die’s value. You then increase the die’s value by one. When the die’s value would exceed 6, this effect ends."
          },
          {
            "id": "healing-strike",
            "name": "HEALING STRIKE",
            "level": 7,
            "recall_cost": 1,
            "type": "Spell",
            "feature": "When you deal damage to an adversary, you can spend 2 Hope to clear a Hit Point on an ally within Close range."
          },
          {
            "id": "splendor-touched",
            "name": "SPLENDOR-TOUCHED",
            "level": 7,
            "recall_cost": 2,
            "type": "Ability",
            "feature": "When 4 or more of the domain cards in your loadout are from the Splendor domain, gain the following benefits:\n  +3 bonus to your Severe damage threshold\n  Once per long rest, when incoming damage would require you to mark a number of Hit Points, you can choose to mark that much Stress or spend that much Hope instead."
          },
          {
            "id": "shield-aura",
            "name": "SHIELD AURA",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Mark a Stress to cast a protective aura on a target within Very Close range. When the target marks an Armor Slot, they reduce the severity of the attack by an additional threshold. If this spell causes a creature who would be damaged to instead mark no Hit Points, the effect ends.\nYou can only hold Shield Aura on one creature at a time."
          },
          {
            "id": "stunning-sunlight",
            "name": "STUNNING SUNLIGHT",
            "level": 8,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll to unleash powerful rays of burning sunlight against all adversaries in front of you within Far range. On a success, spend any number of Hope and force that many targets you succeeded against to make a Reaction Roll (14).\nTargets who succeed take 3d20+3 magic damage. Targets who fail take 4d20+5 magic damage and are temporarily Stunned. While Stunned, they can’t use reactions and can’t take any other actions until they clear this condition."
          },
          {
            "id": "overwhelming-aura",
            "name": "OVERWHELMING AURA",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (15) to magically empower your aura. On a success, spend 2 Hope to make your Presence equal to your Spellcast trait until your next long rest.\nWhile this spell is active, an adversary must mark a Stress when they target you with an attack."
          },
          {
            "id": "salvation-beam",
            "name": "SALVATION BEAM",
            "level": 9,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (16). On a success, mark any number of Stress to target a line of allies within Far range. You can clear Hit Points on the targets equal to the number of Stress marked, divided among them however you’d like."
          },
          {
            "id": "invigoration",
            "name": "INVIGORATION",
            "level": 10,
            "recall_cost": 3,
            "type": "Spell",
            "feature": "When you or an ally within Close range has used a feature that has an exhaustion limit (such as once per rest or once per session), you can spend any number of Hope and roll that many d6s. If any roll a 6, the feature can be used again."
          },
          {
            "id": "resurrection",
            "name": "RESURRECTION",
            "level": 10,
            "recall_cost": 2,
            "type": "Spell",
            "feature": "Make a Spellcast Roll (20). On a success, restore one creature who has been dead no longer than 100 years to full strength. Then roll a d6. On a result of 5 or lower, place this card in your vault permanently. On a failure, you can’t cast Resurrection again for a week."
          }
        ]
      }
    ],
    "background_questions": [
      "What responsibilities did your community once count on you for? How did you let them down?"
    ],
    "connections": []
  }
}
