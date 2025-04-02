"use client";

import { signInWithGoogle } from '../lib/firebase/auth'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SignInWithGoogle() {
  return (
    <motion.button
      onClick={signInWithGoogle}
      className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src="/google.svg"
        alt="Google Logo"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span>Sign in with Google</span>
    </motion.button>
  )
}
