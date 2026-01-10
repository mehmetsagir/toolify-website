'use client';

import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mic, Download, ArrowRight, Sparkles, Volume2, Zap } from 'lucide-react';

export default function Home() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 14 });

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
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-sky-400/20 blur-[120px]"
          animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[1.1fr_0.9fr] items-start gap-10 sm:gap-12">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Built for focused creators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Speak once.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-orange-300 bg-clip-text text-transparent">
                Publish everywhere.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-gray-300"
            >
              Toolify captures clean audio, transcribes with Whisper, and turns your voice into drafts, clips, and notes
              without breaking your flow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download for Mac
                <ArrowRight className="h-4 w-4" />
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
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-300" />
                Instant transcription
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-emerald-300" />
                Auto-ducking audio
              </div>
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-sky-300" />
                Studio-grade capture
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Local models, offline-ready
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-200" />
                Optional OpenAI API key
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto flex h-[420px] w-full max-w-[440px] items-center justify-center lg:h-[480px]"
            style={{ perspective: '1200px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[140px]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="relative h-full w-full"
              style={{ transformStyle: 'preserve-3d', rotateX: smoothX, rotateY: smoothY }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),rgba(59,130,246,0.35),rgba(16,185,129,0.2),transparent_70%)] shadow-[0_40px_100px_rgba(14,116,144,0.45)]"
                style={{ transform: 'translateZ(70px)' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                style={{ transform: 'translateZ(20px) rotateX(70deg)' }}
                animate={{ rotateZ: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[26px] border border-white/15 bg-white/8 p-5 shadow-[0_40px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl"
                style={{ transform: 'translateZ(40px) rotate(-6deg)' }}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-gray-400">Soundboard</div>
                <div className="mt-3 text-2xl font-semibold text-white">Clean, crisp input</div>
                <div className="mt-4 space-y-3">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-emerald-300/70 to-sky-300/60" />
                  <div className="h-2 w-2/3 rounded-full bg-white/20" />
                  <div className="h-2 w-3/4 rounded-full bg-white/15" />
                </div>
              </motion.div>
              <motion.div
                className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-gray-300"
                style={{ transform: 'translateZ(10px) translateX(90px) translateY(60px)' }}
              >
                Offline ready
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 w-2/3 rounded-full bg-emerald-300/60" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
