import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BusinessModel: React.FC = () => {
  const financialData = [
    {
      year: "2025",
      users: 1000,
      nativeAds: 100 * 2000,
      premium: 0,
      targetedAds: 0,
      total: 100 * 2000,
    },
    {
      year: "2026",
      users: 2000,
      nativeAds: 200 * 2000,
      premium: 200 * 1000 * 12,
      targetedAds: 200 * 5000,
      total: 200 * 2000 + 200 * 1000 * 12 + 200 * 5000,
    },
    {
      year: "2027",
      users: 3000,
      nativeAds: 300 * 2000,
      premium: 300 * 1000 * 12,
      targetedAds: 400 * 5000,
      total: 300 * 2000 + 300 * 1000 * 12 + 400 * 5000,
    },
  ];

  return (
    <section className="bg-gray-50 section-padding" id="business-model">
      <div className="mx-auto container">
        <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl text-center">
          Business Model
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-gray-600 text-lg text-center">
          Our sustainable model creates student value and a viable business.
        </p>

        <div className="bg-white shadow-md mb-12 p-6 rounded-xl">
          <h3 className="mb-4 font-semibold text-uninav-primary text-2xl">
            Market Opportunity
          </h3>
          <p className="mb-4 text-gray-700">
            Nigeria has <span className="font-bold">283</span> universities for
            a population of over <span className="font-bold">200 million</span>,
            yet faces a significant shortfall in undergraduate enrollment
            capacity (around <span className="font-bold">875,000</span> spots
            for <span className="font-bold">1.5 million+</span> annual
            applicants).
          </p>

          <div className="bg-gray-50 my-4 p-4 border-uninav-secondary border-l-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              <span className="font-bold">Source:</span>{" "}
              <a
                href="https://businessday.ng/editorial/article/n-assemblys-200-new-varsities-dream-amid-lecturers-shortage/"
                className="text-uninav-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Businessday NG, Published March 24, 2025
              </a>
            </p>
          </div>

          <div className="bg-uninav-light p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Key Insight:</span> This disparity
              highlights students' struggle for academic resources and peer
              support. UniNav addresses this by centralizing resource sharing
              and collaboration, serving a vast market across Nigeria's
              universities.
            </p>
          </div>
        </div>

        <h3 className="mb-6 font-semibold text-uninav-primary text-2xl text-center">
          Revenue Streams
        </h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-16">
          <div className="feature-card">
            <div className="mb-4 text-uninav-accent text-3xl">📢</div>
            <h4 className="mb-2 font-semibold text-uninav-dark text-xl">
              Native Ads
            </h4>
            <p className="text-gray-600">
              Students can pay to display more ads per material or replace
              existing ones—ideal for student campaigns needing wider political
              awareness. (Currently: 1 free ad/material, non-replaceable).
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 text-uninav-accent text-3xl">⭐</div>
            <h4 className="mb-2 font-semibold text-uninav-dark text-xl">
              Premium Features
            </h4>
            <p className="text-gray-600">
              Paid enhancements like an in-app PDF reader with AI Q&A, sticky
              notes, quiz generation, AI study plans, and advanced progress
              analytics.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 text-uninav-accent text-3xl">🎯</div>
            <h4 className="mb-2 font-semibold text-uninav-dark text-xl">
              Targeted Ads & Sponsors
            </h4>
            <p className="text-gray-600">
              Organizations can feature ads in search results for better
              visibility. Partners include student-focused businesses,
              educational services, and event organizers.
            </p>
          </div>
        </div>

        <h3 className="mb-6 font-semibold text-uninav-primary text-2xl text-center">
          Financial Projection
        </h3>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <div className="mb-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={financialData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    `₦${value.toLocaleString()}`,
                    undefined,
                  ]}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Bar
                  dataKey="nativeAds"
                  name="Native Ads Revenue"
                  fill="#4F46E5"
                />
                <Bar dataKey="premium" name="Premium Features" fill="#9B87F5" />
                <Bar dataKey="targetedAds" name="Targeted Ads" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Native Ads
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Premium Features
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Targeted Ads
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider">
                    Total Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {financialData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                      {item.year}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                      {item.users}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                      ₦{item.nativeAds.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                      ₦{item.premium.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">
                      ₦{item.targetedAds.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                      ₦{item.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-gray-500 text-sm">
            <p>
              <span className="font-semibold">2025:</span> 1K users, 10% (100)
              buy native ads (₦2K each).
            </p>
            <p>
              <span className="font-semibold">2026:</span> 2K users, 200 native
              ads, 200 premium subs (₦1K/mo), 200 targeted ads (₦5K each).
            </p>
            <p>
              <span className="font-semibold">2027:</span> 3K users, 300 native
              ads, 300 premium subs, 400 targeted ads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
