import React, { useState, useEffect } from "react";
import supabase from "../../lib/supabase";
import InputField from "./InputField";
import {
  CloseIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  AlertTriangleIcon,
} from "../icons/Icons";
import logo from "@images/logo.png";

const AuthModal = ({
  isOpen,
  onClose,
  onAuthSuccess,
  defaultMode = "signin",
}) => {
  const [isSignIn, setIsSignIn] = useState(defaultMode === "signin");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
    setError("");
    setMessage("");
    setIsLoading(false);
    setIsSignIn(defaultMode === "signin");
    setIsForgotPassword(false);
  }, [isOpen, defaultMode]);

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        onAuthSuccess?.();
        onClose();
      }
    };
    if (isOpen) checkSession();
  }, [isOpen, onAuthSuccess, onClose]);

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      if (isForgotPassword) {
        // Handle password reset email
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setMessage("Password reset link sent! Please check your email.");
      } else if (isSignIn) {
        //  Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onAuthSuccess?.();
        onClose();
      } else {
        // Sign Up
        if (username.trim().length < 3)
          throw new Error("Full name must be at least 3 characters long.");

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { username },
          },
        });
        if (error) throw error;
        setMessage("Check your email to verify your account.");
        setIsSignIn(true);
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/10 p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#207681] font-bold text-xl">
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <span>Setlinn</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        {!isForgotPassword && (
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                isSignIn
                  ? "text-[#207681] border-b-2 border-[#207681]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                !isSignIn
                  ? "text-[#207681] border-b-2 border-[#207681]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          {error && (
            <div className="flex items-center p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
              <AlertTriangleIcon className="w-4 h-4 mr-2" />
              <span>{error}</span>
            </div>
          )}
          {message && (
            <div className="flex items-center p-3 mb-4 text-sm text-green-800 rounded-lg bg-green-50">
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleAuthAction} className="space-y-4">
            {isForgotPassword ? (
              <>
                <InputField
                  icon={MailIcon}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-white ${
                    isLoading
                      ? "bg-[#207681]/50 cursor-not-allowed"
                      : "bg-[#207681] hover:bg-[#155e63]"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
                <p className="text-center text-sm mt-3">
                  Remembered your password?{" "}
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(false)}
                    className="text-[#207681] hover:underline"
                  >
                    Back to Sign In
                  </button>
                </p>
              </>
            ) : (
              <>
                {!isSignIn && (
                  <InputField
                    icon={UserIcon}
                    placeholder="Full Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                )}

                <InputField
                  icon={MailIcon}
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />

                <InputField
                  icon={LockIcon}
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-2 px-4 rounded-lg font-medium text-white ${
                    isLoading
                      ? "bg-[#207681]/50 cursor-not-allowed"
                      : "bg-[#207681] hover:bg-[#155e63]"
                  }`}
                >
                  {isLoading
                    ? "Loading..."
                    : isSignIn
                    ? "Sign In"
                    : "Create Account"}
                </button>

                {isSignIn && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-sm text-[#207681] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
