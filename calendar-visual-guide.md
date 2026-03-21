# Events Calendar - Visual Guide & Examples

## Preview: How the Calendar Looks

### Main Interface
```
┌─────────────────────────────────────────────────────────────────┐
│                    🚀 Events Calendar 🚀                        │
│            স্কুলের সকল ইভেন্ট সম্পর্কে আপডেট থাকুন             │
│                                                                 │
│  [English] [বাংলা]  ← Language Toggle                          │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────────────┬───────────────────────────────┐
│     Calendar Navigation        │    Selected Date Details     │
│  [←] [March 2026] [→] [Today] │    21                        │
│                                │    শুক্রবার                  │
│  Calendar Grid                 │    ফেব্রুয়ারি 2026           │
│  ┌──┬──┬──┬──┬──┬──┬──┐       │                               │
│  │Sun│Mon│Tue│Wed│Thu│Fri│Sat│ │    ┌─────────────────────┐   │
│  ├──┼──┼──┼──┼──┼──┼──┼──┤       │    │ 🔴 PUBLIC HOLIDAY   │   │
│  │1 │2 │3 │4 │5 │🟠│7 │       │    │                       │   │
│  ├──┼──┼──┼──┼──┼──┼──┼──┤       │    │ International Mother│   │
│  │8 │9 │10│11│12│🟠│14│       │    │ Language Day         │   │
│  ├──┼──┼──┼──┼──┼──┼──┼──┤       │    │                       │   │
│  │15│16│17│18│19│🟠│21│←HOL│   │    │ আন্তর্জাতিক মাতৃভাষা   │   │
│  ├──┼──┼──┼──┼──┼──┼──┼──┤       │    │ দিবস                  │   │
│  │22│23│24│25│26│🟠│28│       │    │                       │   │
│  └──┴──┴──┴──┴──┴──┴──┘       │    │ Schools Closed ✓     │   │
│                                │    │                       │   │
│  Legend:                       │    │ [📅 Add to Google     │   │
│  🔴 Public Holiday             │    │    Calendar]          │   │
│  🔵 School Event               │    └─────────────────────┘   │
│  🟠 Friday (Weekend)           │                               │
│                                │    ⚠️ Bangladesh Weekend     │
│                                │    Friday is the official   │
│                                │    weekly holiday. Schools   │
│                                │    remain closed.           │
└────────────────────────────────┴───────────────────────────────┘

Legend:
🟠 = Friday (highlighted with red background)
🔴 = Holiday date (red background, bold text)
🔵 = School event (blue background)
```

---

## Example: February 2026

### Calendar View
```
     February 2026
┌──┬──┬──┬──┬──┬──┬──┐
│Sun│Mon│Tue│Wed│Thu│Fri│Sat│
├──┼──┼──┼──┼──┼──┼──┤
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │  (Normal days)
├──┼──┼──┼──┼──┼──┼──┤
│ 8 │ 9 │10 │11 │12 │13 │14 │  (Normal days)
├──┼──┼──┼──┼──┼──┼──┤
│15 │16 │17 │18 │19 │20 │21 │  ← Feb 20: Cultural Event
├──┼──┼──┼──┼──┼──┼──┤  ← Feb 21: 🔴 HOLIDAY (Red)
│22 │23 │24 │25 │26 │27 │28 │  (Normal days)
└──┴──┴──┴──┴──┴──┴──┘
```

### When User Clicks Feb 21, 2026

**Details Panel Shows:**
```
┌─────────────────────────────────┐
│      Selected Date              │
│        21                       │
│      শুক্রবার                    │
│      ফেব্রুয়ারি 2026            │
├─────────────────────────────────┤
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🔴 PUBLIC HOLIDAY          │  │
│  │                           │  │
│  │ International Mother      │  │
│  │ Language Day              │  │
│  │                           │  │
│  │ আন্তর্জাতিক মাতৃভাষা দিবস   │  │
│  │                           │  │
│  │ Martyred Intellectuals    │  │
│  │ Day - Schools and offices │  │
│  │ remain closed to honor    │  │
│  │ those who sacrificed      │  │
│  │ their lives for Bengali   │  │
│  │ language.                 │  │
│  │                           │  │
│  │ ✓ Schools Closed          │  │
│  │                           │  │
│  │ [📅 Add to Google Cal]    │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 📚 School Event            │  │
│  │                           │  │
│  │ Cultural Program -        │  │
│  │ Ekushey February          │  │
│  │                           │  │
│  │ একুশে ফেব্রুয়ারি            │  │
│  │ সাংস্কৃতিক অনুষ্ঠান          │  │
│  │                           │  │
│  │ Special cultural program  │  │
│  │ to commemorate Language  │  │
│  │ Martyrs' Day. All students│  │
│  │ must attend.              │  │
│  │                           │  │
│  │ [📅 Add to Google Cal]    │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

---

## Example: March 2026

### Calendar View
```
     March 2026
┌──┬──┬──┬──┬──┬──┬──┐
│Sun│Mon│Tue│Wed│Thu│Fri│Sat│
├──┼──┼──┼──┼──┼──┼──┤
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │
├──┼──┼──┼──┼──┼──┼──┤
│ 8 │ 9 │🔵10│11 │12 │13 │14 │  ← Mar 10: 🔵 Unit Test
├──┼──┼──┼──┼──┼──┼──┤
│15 │16 │17 │18 │19 │20 │21 │  (Normal days)
├──┼──┼──┼──┼──┼──┼──┤
│22 │23 │24 │25 │🔵26│27 │28 │  ← Mar 25: 🔵 Sports Day
├──┼──┼──┼──┼──┼──┼──┤      ← Mar 26: 🔴 Independence Day
│29 │30 │31 │   │   │   │   │
└──┴──┴──┴──┴──┴──┴──┘
```

### When User Clicks Mar 26, 2026

**Details Panel Shows:**
```
┌─────────────────────────────────┐
│      Selected Date              │
│        26                       │
│      বৃহস্পতিবার                 │
│      মার্চ 2026                 │
├─────────────────────────────────┤
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🔴 PUBLIC HOLIDAY          │  │
│  │                           │  │
│  │ Independence Day           │  │
│  │                           │  │
│  │ স্বাধীনতা দিবস              │  │
│  │                           │  │
│  │ National Independence Day  │  │
│  │ celebrating Bangladesh's   │  │
│  │ independence from Pakistan│  │
│  │ in 1971.                   │  │
│  │                           │  │
│  │ ✓ Schools Closed          │  │
│  │                           │  │
│  │ [📅 Add to Google Cal]    │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

---

## Example: Regular Day (No Events)

**Details Panel Shows:**
```
┌─────────────────────────────────┐
│      Selected Date              │
│        15                       │
│      রবিবার                     │
│      মার্চ 2026                 │
├─────────────────────────────────┤
│                                 │
│         ┌─────────────────┐     │
│         │                 │     │
│         │   📅  No events │     │
│         │   on this date │     │
│         │                 │     │
│         │  এই তারিখে কোনো │     │
│         │  ইভেন্ট নেই     │     │
│         │                 │     │
│         └─────────────────┘     │
│                                 │
└─────────────────────────────────┘
```

---

## Example: Upcoming Events Section

```
┌────────────────────────────────────┐
│        Upcoming Events             │
├────────────────────────────────────┤
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🔴 Independence Day            │ │
│ │ March 26, 2026                 │ │
│ │ Public Holiday                 │ │
│ └────────────────────────────────┘ │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🔵 Annual Sports Day           │ │
│ │ March 25, 2026                 │ │
│ │ School Event                   │ │
│ └────────────────────────────────┘ │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🔵 First Unit Test             │ │
│ │ March 10, 2026                 │ │
│ │ School Event                   │ │
│ └────────────────────────────────┘ │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🔵 Cultural Program            │ │
│ │ February 20, 2026              │ │
│ │ School Event                   │ │
│ └────────────────────────────────┘ │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🔴 International Mother        │ │
│ │ Language Day                   │ │
│ │ February 21, 2026              │ │
│ │ Public Holiday                 │ │
│ └────────────────────────────────┘ │
│                                    │
└────────────────────────────────────┘
```

---

## Example: Language Toggle

### English Mode
```
Events Calendar
Stay updated with all school events, activities, and important dates.

[English] [বাংলা]

Selected Date
21
Friday
February 2026

PUBLIC HOLIDAY
International Mother Language Day
Schools Closed ✓

[Add to Google Calendar]
```

### Bengali Mode (বাংলা)
```
ইভেন্ট ক্যালেন্ডার
স্কুলের সকল ইভেন্ট, কার্যক্রম এবং গুরুত্বপূর্ণ তারিখ সম্পর্কে আপডেট থাকুন।

[English] [বাংলা]

নির্বাচিত তারিখ
২১
শুক্রবার
ফেব্রুয়ারি ২০২৬

সরকারি ছুটি
আন্তর্জাতিক মাতৃভাষা দিবস
বিদ্যালয় বন্ধ ✓

[গুগল ক্যালেন্ডারে যোগ করুন]
```

---

## Color Coding Reference

```
┌──────────────────────────────────────────────┐
│ Calendar Legend                              │
├──────────────────────────────────────────────┤
│                                              │
│  ┌─────────┐  Public Holiday                │
│  │         │  bg-red-100 text-red-700        │
│  │   🔴    │  (Light red background)        │
│  │         │  (Dark red text)               │
│  └─────────┘  (Bold text)                   │
│                                              │
│  ┌─────────┐  School Event                  │
│  │         │  bg-blue-50 text-blue-700        │
│  │   🔵    │  (Light blue background)       │
│  │         │  (Dark blue text)               │
│  └─────────┘                                 │
│                                              │
│  ┌─────────┐  Friday (Weekend)              │
│  │    🟠   │  bg-red-50                      │
│  │         │  (Very light red background)    │
│  │         │  Red dot indicator below date   │
│  └─────────┘                                 │
│                                              │
│  ┌─────────┐  Today                         │
│  │         │  bg-rose-50 text-rose-700       │
│  │   📅    │  (Light rose background)        │
│  │         │  (Dark rose text)               │
│  └─────────┘  (Bold text)                   │
│                                              │
│  ┌─────────┐  Selected Date                 │
│  │         │  bg-rose-600 text-white         │
│  │   ⭐    │  (Rose background)              │
│  │         │  (White text)                   │
│  └─────────┘  (Bold text)                   │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Mobile Responsive Layout

### Mobile (< 768px)
```
┌─────────────────────┐
│   Events Calendar   │
│   [EN] [বাংলা]       │
└─────────────────────┘
┌─────────────────────┐
│   March 2026         │
│  [←]      [→]       │
│  [Today]            │
├─────────────────────┤
│ Calendar Grid       │
│ (Full width)        │
│                     │
│ ┌──┬──┬──┬──┬──┬──┬──┐│
│ │Sun│Mon│Tue│...    ││
│ └──┴──┴──┴──┴──┴──┴──┘│
│                     │
│ Legend:             │
│ 🔴 Holiday          │
│ 🔵 School Event    │
│ 🟠 Friday          │
└─────────────────────┘
┌─────────────────────┐
│  Selected Date      │
│    21               │
│    Friday           │
│    February 2026    │
├─────────────────────┤
│                     │
│  ┌───────────────┐  │
│  │ 🔴 HOLIDAY    │  │
│  │               │  │
│  │ International │  │
│  │ Mother        │  │
│  │ Language Day  │  │
│  │               │  │
│  │ [📅 Add]      │  │
│  └───────────────┘  │
│                     │
│  ⚠️ Weekend Notice  │
│  Friday is the     │
│  weekly holiday.   │
│                     │
└─────────────────────┘
```

---

## Quick Reference: Key Features

✅ **Bilingual Support**: English + Bengali (বাংলা)
✅ **Friday Highlight**: Red background + dot indicator
✅ **Holiday Styling**: Red background, bold text
✅ **School Events**: Blue background
✅ **Split View**: Calendar left, details right
✅ **Google Calendar**: One-click add
✅ **Upcoming Events**: Next 5 events displayed
✅ **Responsive**: Works on mobile and desktop
✅ **Precedence**: Holidays show first, school events second
✅ **Weekend Info**: Banner explaining Bangladesh weekend

---

## Testing Checklist

- [ ] Calendar displays correctly
- [ ] Navigation works (prev/next month)
- [ ] "Today" button works
- [ ] Language toggle switches EN/BN
- [ ] Click date shows details
- [ ] Holidays have red styling
- [ ] School events have blue styling
- [ ] Fridays highlighted
- [ ] Google Calendar links work
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Build succeeds
- [ ] Lint passes

---

**End of Visual Guide**
