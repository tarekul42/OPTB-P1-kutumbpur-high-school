# Events Calendar - Bangladesh School

A professional Events Calendar for Kutumbpur High School website, specifically tailored for Bangladesh with Bengali localization, Friday weekend system, and national holidays.

## Features

### 1. Calendar Setup & Localization
- Uses `react-calendar` library for the calendar interface
- **Locale**: Supports bn-BD (Bengali - Bangladesh) locale
- **Week Structure**: Week starts on Sunday, but Fridays are styled distinctly as the official weekend
- **Language Toggle**: Switch between English and Bengali (বাংলা)
- **Month Names**: Display in Bengali or English based on language preference

### 2. Bangladesh Holiday Integration
Located in `src/data/bangladeshHolidays.js`, includes:

**National Days:**
- Independence Day (March 26)
- Victory Day (December 16)
- International Mother Language Day (February 21)

**Cultural/Religious Holidays:**
- Pahela Baishakh (Bengali New Year) - April 14
- Eid-ul-Fitr (Tentative dates for 2026)
- Eid-ul-Adha (Tentative dates for 2026)
- Durga Puja (Vijaya Dashami)
- Buddha Purnima
- Janmashtami
- Christmas Day
- National Children's Day
- National Mourning Day

**Data Structure:**
```javascript
{
  id: 1,
  title: "International Mother Language Day",
  date: "2026-02-21",
  type: "public_holiday" | "school_event",
  description: "...",
  bnTitle: "আন্তর্জাতিক মাতৃভাষা দিবস"
}
```

### 3. Visual Interactivity

**Tile Styling:**
- **Public Holidays**: `bg-red-100 text-red-700` - Red background with bold text
- **School Events**: `bg-blue-50 text-blue-700` - Blue background
- **Fridays (Weekend)**: `bg-red-50` - Light red background with indicator dot

**Styling Logic:**
- Holidays take visual precedence over school events
- If a date is both a holiday and has a school event, it's marked as "Holiday" with the school event still visible
- Fridays are automatically highlighted with a red tint

### 4. Event Details Panel

**Split View Layout:**
- **Left Side**: Interactive calendar and upcoming events list
- **Right Side**: Detailed event information for selected date

**Click Logic:**
- Displays all events for the selected date
- Holidays are prominently marked with a badge
- Shows event descriptions and details
- Holiday dates like February 21 show "School Closed" notice

### 5. Google Calendar Integration

Each event includes a "Add to Google Calendar" link that:
- Pre-fills the event title
- Adds event description
- Sets location to "Kutumbpur High School"
- Uses proper date formatting for Google Calendar

**Link Generator:**
```javascript
export const generateGoogleCalendarLink = (event) => {
  // Returns properly formatted Google Calendar URL
}
```

## Technical Implementation

### Dependencies
- `react-calendar`: ^6.0.0 - Calendar component
- `date-fns`: ^4.1.0 - Date manipulation
- `tailwindcss`: ^4.2.1 - Styling
- `flowbite`: ^4.0.1 - UI components

### Key Functions

**Friday Detection:**
```javascript
const isFriday = (date) => {
  return date.getDay() === 5; // Friday is day 5 in JavaScript
};
```

**Holiday Checking:**
```javascript
const isHoliday = (date) => {
  const dateStr = formatDate(date);
  return bangladeshHolidays.find(holiday => holiday.date === dateStr);
};
```

**Date Formatting:**
```javascript
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
```

### Custom CSS
Located in `src/styles/calendar.css`, provides:
- Custom styling for calendar tiles
- Holiday and event indicators
- Responsive adjustments
- Print styles
- Visual indicators for Fridays

## Usage

### Component Structure
```jsx
<EventsCalendar />
```

### Features:
- **Language Toggle**: Click buttons to switch between English/Bengali
- **Date Selection**: Click any date to see event details
- **Navigation**: Use arrows to move between months
- **Today Button**: Quick jump to current date
- **Event Links**: Click "Add to Google Calendar" for any event

### Responsive Design
- Mobile-friendly layout with stacked views
- Desktop uses split-view layout
- Calendar adapts to screen size

## Customization

### Adding New Holidays
Edit `src/data/bangladeshHolidays.js`:
```javascript
export const bangladeshHolidays = [
  // Add new holiday entries here
  {
    id: 17,
    title: "New Holiday",
    date: "2026-MM-DD",
    type: "public_holiday",
    description: "...",
    bnTitle: "নতুন ছুটি"
  }
];
```

### Adding School Events
```javascript
export const schoolEvents = [
  {
    id: 111,
    title: "New Event",
    date: "2026-MM-DD",
    type: "school_event",
    description: "...",
    bnTitle: "নতুন অনুষ্ঠান"
  }
];
```

## Bangladesh Weekend System

Bangladesh follows a Friday-Saturday weekend system:
- **Friday**: Official weekly holiday
- **Saturday**: Second weekly holiday (for government offices)
- **School**: Usually closed on Friday

The calendar automatically highlights all Fridays with a distinct style.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Lazy loading of calendar component
- Memoized event lookups for better performance
- Optimized re-renders with useMemo and useCallback

## Accessibility

- ARIA labels on navigation buttons
- Keyboard navigation support
- Screen reader friendly
- High contrast colors for holidays

## Future Enhancements

- [ ] Add event notifications
- [ ] Implement event filtering
- [ ] Add more Bengali numerals
- [ ] Calendar download feature
- [ ] Email subscription for events
- [ ] Integration with school management system
- [ ] Multi-language support for more languages
- [ ] Event reminder system

## License

Part of the Kutumbpur High School website project.
