import { ArrowUpRight, BarChart3, CircleDollarSign, Command, FolderKanban, LayoutDashboard, Users } from "lucide-react";

const bars = [40, 57, 43, 72, 58, 82, 66, 90, 75, 100, 87, 96];

/** Pure CSS/HTML product mockup. Replace with screenshots of your real app. */
export function DashboardPreview() {
  return (
    <div className="dashboard" aria-label="Illustrative analytics dashboard preview">
      <aside className="dashboard-sidebar" aria-hidden="true">
        <span className="mini-brand"><Command size={19}/> orbit<span className="mini-brand-dot">.</span></span>
        <div className="side-item active"><LayoutDashboard size={15}/> Overview</div>
        <div className="side-item"><BarChart3 size={15}/> Analytics</div>
        <div className="side-item"><Users size={15}/> Customers</div>
        <div className="side-item"><FolderKanban size={15}/> Projects</div>
        <div className="side-item"><CircleDollarSign size={15}/> Billing</div>
        <span className="sidebar-foot">YOUR WORKSPACE</span>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-top"><span>Overview <span className="crumb">/ Dashboard</span></span><span className="avatar">JD</span></div>
        <div className="dashboard-intro"><div><strong>Welcome back, Jordan 👋</strong><span>Here&apos;s what&apos;s happening with your business.</span></div><span className="demo-period">Last 30 days⌄</span></div>
        <div className="stat-grid">
          <div className="stat"><span>Total revenue</span><strong>$48,295</strong><small>↗ +12.8% this month</small></div>
          <div className="stat"><span>Active customers</span><strong>2,847</strong><small>↗ +8.2% this month</small></div>
          <div className="stat"><span>Conversion rate</span><strong>4.86%</strong><small>↗ +2.1% this month</small></div>
        </div>
        <div className="dashboard-chart"><div className="chart-heading"><div><strong>Revenue overview</strong><span>Growth over time</span></div><ArrowUpRight size={16}/></div><div className="bar-chart">{bars.map((height,i)=><div key={i} className="bar-track"><span className="bar" style={{height: `${height}%`}}/></div>)}</div><div className="chart-months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dec</span></div></div>
      </div>
    </div>
  );
}
