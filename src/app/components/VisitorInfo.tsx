"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Globe, Clock, Monitor, Eye, Cookie } from "lucide-react";
import { motion } from "framer-motion";

const VisitorInfo = () => {
  const [country, setCountry] = useState<string | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [visitCount, setVisitCount] = useState<number>(1);
  const [userAgent, setUserAgent] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const last = Cookies.get("lastVisit");
    const count = Cookies.get("visitCount");
    const now = new Date();

    if (last) setLastVisit(last);
    Cookies.set("lastVisit", now.toLocaleString(), { expires: 30 });

    const newCount = count ? parseInt(count) + 1 : 1;
    setVisitCount(newCount);
    Cookies.set("visitCount", newCount.toString(), { expires: 30 });

    const savedCountry = Cookies.get("country");
    if (!savedCountry) {
      fetch("https://ipapi.co/json")
        .then((res) => res.json())
        .then((data) => {
          Cookies.set("country", data.country_name, { expires: 30 });
          setCountry(data.country_name);
        })
        .catch((err) => console.error("GeoIP error:", err));
    } else {
      setCountry(savedCountry);
    }

    setUserAgent(navigator.userAgent);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="mt-10 rounded-2xl border border-gray-300 bg-gray-50 p-4 text-gray-800 text-sm shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 font-medium mb-2">
        <Cookie className="h-4 w-4 text-yellow-500" />
        Visitor Info & Cookies Notice
      </div>

      <div className="space-y-1">
        {country && (
          <p className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Detected location: <strong>{country}</strong>
          </p>
        )}
        {lastVisit && (
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Last visit: <strong>{lastVisit}</strong>
          </p>
        )}
        <p className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Total visits: <strong>{visitCount}</strong>
        </p>
        {userAgent && (
          <p className="flex items-center gap-2 truncate">
            <Monitor className="h-4 w-4" />
            Browser: <span className="truncate">{userAgent}</span>
          </p>
        )}
      </div>

      <p className="mt-3 text-xs text-gray-600">
        This website uses cookies to personalize your experience and track basic anonymous visit data. No personal or sensitive information is collected.
      </p>

      <div className="mt-2 flex justify-end">
        <button
          onClick={() => setVisible(false)}
          className="text-xs text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default VisitorInfo;
