"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Mic,
  Download,
  ArrowRight,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";
import { GITHUB_REPO, DOWNLOAD_CONFIG } from "@/config/constants";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [is3DAreaHovered, setIs3DAreaHovered] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 14 });

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // Fetch latest release from GitHub API
      const response = await fetch(GITHUB_REPO.RELEASES_API);

      if (!response.ok) {
        throw new Error("Failed to fetch latest release");
      }

      const release = await response.json();

      // Find the DMG asset
      const dmgAsset = release.assets.find((asset: { name: string }) =>
        asset.name.endsWith(DOWNLOAD_CONFIG.FILE_EXTENSION)
      );

      if (!dmgAsset) {
        throw new Error(`${DOWNLOAD_CONFIG.FILE_EXTENSION} file not found in latest release`);
      }

      // Trigger download
      window.location.href = dmgAsset.browser_download_url;
    } catch (error) {
      console.error("Download error:", error);
      alert(
        "Failed to download. Please try again or visit the GitHub releases page."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 12);
    rotateY.set(x * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b0f14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.12),transparent_40%)]" />
        <motion.div
          className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px]"
          animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-sky-400/20 blur-[120px]"
          animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-0">
        <div className="mx-auto flex flex-col-reverse lg:grid w-full max-w-6xl lg:grid-cols-[1.1fr_0.9fr] items-center lg:items-start gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              <Zap className="h-4 w-4 text-amber-300" />
              Think faster, work smarter
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Stop typing.{" "}
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-orange-300 bg-clip-text text-transparent">
                Start creating.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Hit a key, speak your mind, and watch your words appear instantly. Use local Whisper models offline or connect to OpenAI API—your choice. Fast, flexible, and always ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                whileHover={{ scale: isDownloading ? 1 : 1.02 }}
                whileTap={{ scale: isDownloading ? 1 : 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
              >
                <Download
                  className={`h-4 w-4 ${isDownloading ? "animate-bounce" : ""}`}
                />
                {isDownloading ? "Downloading..." : "Download for Mac"}
                {!isDownloading && <ArrowRight className="h-4 w-4" />}
              </motion.button>
              <a
                href="https://github.com/mehmetsagir/toolify"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 sm:w-auto"
              >
                Open source, actively developed
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-300" />
                Instant capture
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                Offline or cloud—your choice
              </div>
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-sky-300" />
                One keyboard shortcut
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-purple-300" />
                Studio-quality results
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-sky-200" />
                Auto-copy anywhere
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto flex h-[320px] sm:h-[380px] md:h-[420px] w-full max-w-[340px] sm:max-w-[380px] md:max-w-[440px] items-center justify-center lg:h-[480px]"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIs3DAreaHovered(true)}
            onMouseLeave={() => {
              handleMouseLeave();
              setIs3DAreaHovered(false);
            }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[100px] sm:blur-[120px] md:blur-[140px]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative h-full w-full"
              style={{
                transformStyle: 'preserve-3d',
                rotateX: smoothX,
                rotateY: smoothY,
              }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),rgba(59,130,246,0.35),rgba(16,185,129,0.2),transparent_70%)] shadow-[0_30px_80px_rgba(14,116,144,0.45)] sm:shadow-[0_40px_100px_rgba(14,116,144,0.45)]"
                style={{ transform: 'translateZ(70px)' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                style={{ transform: 'translateZ(20px) rotateX(70deg)' }}
                animate={{ rotateZ: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Cards Container - rotates with mouse */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(40px)'
                }}
              >
                {/* Ana Kart - Toolify */}
                <motion.div
                  className="absolute w-[200px] sm:w-[230px] md:w-[260px] rounded-[20px] sm:rounded-[24px] md:rounded-[26px] border border-white/15 bg-white/8 p-4 sm:p-5 shadow-[0_30px_60px_rgba(15,23,42,0.55)] sm:shadow-[0_40px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl cursor-pointer left-[-100px] top-[-80px] sm:left-[-115px] md:left-[-130px] sm:top-[-90px] md:top-[-100px]"
                  animate={{
                    y: is3DAreaHovered ? -60 : 0,
                    opacity: is3DAreaHovered ? 0.7 : 1,
                    rotate: -6
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    zIndex: is3DAreaHovered ? 10 : 20
                  }}
                >
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400">Toolify</div>
                  <div className="mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold text-white">Voice to text, instantly</div>
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    <div className="h-1.5 sm:h-2 w-4/5 rounded-full bg-gradient-to-r from-emerald-300/70 to-sky-300/60" />
                    <div className="h-1.5 sm:h-2 w-2/3 rounded-full bg-white/20" />
                    <div className="h-1.5 sm:h-2 w-3/4 rounded-full bg-white/15" />
                  </div>
                </motion.div>

                {/* Offline Kart */}
                <motion.div
                  className="absolute w-[200px] sm:w-[230px] md:w-[260px] rounded-[20px] sm:rounded-[24px] md:rounded-[26px] border border-emerald-500/20 bg-emerald-950/50 p-4 sm:p-5 shadow-[0_30px_60px_rgba(15,23,42,0.55)] sm:shadow-[0_40px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl cursor-pointer left-[-100px] top-[-80px] sm:left-[-115px] md:left-[-130px] sm:top-[-90px] md:top-[-100px]"
                  animate={{
                    y: is3DAreaHovered ? 0 : 30,
                    opacity: is3DAreaHovered ? 1 : 0.5,
                    rotate: 3
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    zIndex: is3DAreaHovered ? 20 : 5
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400">Offline Mode</div>
                  </div>
                  <div className="mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold text-white">Works without internet</div>
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    <div className="h-1.5 sm:h-2 w-full rounded-full bg-emerald-500/30" />
                    <div className="h-1.5 sm:h-2 w-3/4 rounded-full bg-emerald-500/20" />
                    <div className="h-1.5 sm:h-2 w-4/5 rounded-full bg-emerald-500/15" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
