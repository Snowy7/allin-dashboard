# All In Admin Dashboard

A modern, full-featured admin dashboard for managing a handyman service platform. Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

### Landing Page
- ✅ Modern hero section with call-to-action
- ✅ Feature showcase with statistics
- ✅ Responsive design matching mobile app theme
- ✅ Orange/primary color branding

### Admin Dashboard
- ✅ Analytics overview with interactive charts
- ✅ Revenue tracking and trends
- ✅ Booking statistics visualization
- ✅ Service category distribution
- ✅ Real-time activity feed
- ✅ Responsive sidebar navigation
- ✅ Search functionality in header

## 📦 Tech Stack

- **Framework:** Next.js 15.5 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix UI primitives
- **Charts:** Recharts for data visualization
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.
Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the admin dashboard.

## 📁 Project Structure

```
dashboard/
├── src/
│   ├── app/
│   │   ├── dashboard/          # Dashboard pages
│   │   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   │   └── page.tsx        # Analytics dashboard
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles & theme
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── dashboard-sidebar.tsx
│   │   └── dashboard-header.tsx
│   └── lib/
│       ├── utils.ts            # Helper functions
│       └── supabase.ts         # Supabase client setup
├── .env.local                  # Environment variables
└── package.json
```

## 🎨 Design System

### Colors
- **Primary:** Orange (#FF6B35) - Matches mobile app branding
- **Secondary:** Blue (#004E89)
- **Accent:** Gold (#F7B801)
- **Success:** Green for positive indicators
- **Warning:** Yellow for alerts
- **Destructive:** Red for errors

### Components Created
- Button (with variants: default, outline, ghost, link)
- Card (with header, content, footer)
- Input fields
- Tables (for data display)
- Badges (for status indicators)
- Avatar components

## 📊 Dashboard Features

### Current Implementation
- **Overview Stats:** Users, Providers, Bookings, Revenue with trends
- **Revenue Chart:** 6-month area chart
- **Bookings Chart:** Weekly bar chart
- **Category Distribution:** Pie chart for services
- **Activity Feed:** Recent platform activities

### Next Steps
1. **User Management Page** - View, search, and manage customers
2. **Provider Verification** - Approve/reject provider applications
3. **Booking Management** - Track and manage all bookings
4. **Authentication** - Add Supabase Auth for admin access
5. **Real Data Integration** - Connect to actual Supabase database

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Get these values from your [Supabase Dashboard](https://app.supabase.com).

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables
Remember to add all environment variables in your deployment platform.

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

## 🤝 Contributing

1. Follow existing code patterns
2. Use TypeScript for type safety
3. Match the design system
4. Test responsive behavior
5. Write meaningful commit messages

## 📄 License

Proprietary - All rights reserved

---

**Built with** Next.js 15, TypeScript, Tailwind CSS & Supabase
**Last Updated:** October 15, 2025
