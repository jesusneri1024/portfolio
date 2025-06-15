"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Globe, Clock, User, Monitor, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Welcome = () => {
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);
  const [country, setCountry] = useState<string | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [visitCount, setVisitCount] = useState<number>(1);
  const [userAgent, setUserAgent] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("Hola");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const visited = Cookies.get("visited");
    const last = Cookies.get("lastVisit");
    const savedCountry = Cookies.get("country");
    const count = Cookies.get("visitCount");
    const now = new Date();
    const hour = now.getHours();

    // Greeting personalizado
    if (hour < 12) setGreeting("Buenos días");
    else if (hour < 18) setGreeting("Buenas tardes");
    else setGreeting("Buenas noches");

    // Detección de visitas
    if (visited) {
      setIsReturningVisitor(true);
      if (last) setLastVisit(last);
    }
    Cookies.set("visited", "true", { expires: 30 });

    // Guardar última visita
    Cookies.set("lastVisit", now.toLocaleString(), { expires: 30 });

    // Contador de visitas
    const newCount = count ? parseInt(count) + 1 : 1;
    setVisitCount(newCount);
    Cookies.set("visitCount", newCount.toString(), { expires: 30 });

    // País
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

    // Info de dispositivo
    setUserAgent(navigator.userAgent);
  }, []);



  if (!visible) return null;

  return (
    <motion.div
      className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-indigo-900 shadow-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <User className="h-5 w-5 text-indigo-600" />
        {isReturningVisitor ? `${greeting}, bienvenido de nuevo.` : `${greeting}, gracias por visitar mi portafolio.`}
      </div>

      <div className="mt-2 space-y-1 text-sm text-indigo-800">
        {country && (
          <p className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Ubicación detectada: <strong>{country}</strong>
          </p>
        )}
        {lastVisit && (
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Última visita: <strong>{lastVisit}</strong>
          </p>
        )}
        {visitCount > 1 && (
          <p className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Total de visitas: <strong>{visitCount}</strong>
          </p>
        )}
        {userAgent && (
          <p className="flex items-center gap-2 truncate">
            <Monitor className="h-4 w-4" />
            Navegador: <span className="truncate">{userAgent}</span>
          </p>
        )}
      </div>

      <div className="mt-4 flex justify-between">
      
        <button
          onClick={() => setVisible(false)}
          className="text-xs text-indigo-600 hover:underline"
        >
          Cerrar
        </button>
      </div>
    </motion.div>
  );
};

export default Welcome;
