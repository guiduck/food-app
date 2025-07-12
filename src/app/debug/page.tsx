"use client";

import { useState, useEffect } from "react";

export default function DebugPage() {
  const [systemInfo, setSystemInfo] = useState<any>(null);
  const [apiTest, setApiTest] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    // Gather system information
    const info = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      origin: window.location.origin,
      environment: process.env.NODE_ENV,
      localStorage: {
        hasItems: localStorage.length > 0,
        keys: Object.keys(localStorage),
      },
      cookies: document.cookie,
      screen: {
        width: screen.width,
        height: screen.height,
        pixelRatio: window.devicePixelRatio,
      },
      connection: (navigator as any).connection
        ? {
            effectiveType: (navigator as any).connection.effectiveType,
            downlink: (navigator as any).connection.downlink,
            rtt: (navigator as any).connection.rtt,
          }
        : "Not available",
    };

    setSystemInfo(info);
  }, []);

  const testAPI = async () => {
    setTesting(true);
    const results: any = {};

    try {
      // Test various API endpoints
      const tests = [
        {
          name: "Auth Login",
          endpoint: "/api/auth/login",
          method: "POST",
          data: { email: "test@test.com", password: "test" },
        },
        { name: "Stores", endpoint: "/api/stores", method: "GET" },
        { name: "Banners", endpoint: "/api/banners", method: "GET" },
        { name: "Tickets", endpoint: "/api/tickets", method: "GET" },
      ];

      for (const test of tests) {
        try {
          const startTime = Date.now();
          const response = await fetch(test.endpoint, {
            method: test.method,
            headers: { "Content-Type": "application/json" },
            ...(test.data ? { body: JSON.stringify(test.data) } : {}),
          });

          const endTime = Date.now();
          const data = await response.json();

          results[test.name] = {
            status: response.status,
            ok: response.ok,
            responseTime: endTime - startTime,
            data: data,
            headers: Object.fromEntries(response.headers.entries()),
          };
        } catch (error) {
          results[test.name] = {
            error: true,
            message: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined,
          };
        }
      }
    } catch (error) {
      results.generalError = {
        error: true,
        message: error instanceof Error ? error.message : "Unknown error",
      };
    }

    setApiTest(results);
    setTesting(false);
  };

  const sendTestLog = async () => {
    try {
      await fetch("/api/log-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "DEBUG_TEST",
          message: "Test log from debug page",
          timestamp: new Date().toISOString(),
          systemInfo,
        }),
      });
      alert("Test log sent successfully!");
    } catch (error) {
      alert(
        "Failed to send test log: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Debug Information</h1>

      <div className="space-y-6">
        {/* System Information */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">System Information</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(systemInfo, null, 2)}
          </pre>
        </div>

        {/* API Testing */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">API Testing</h2>
          <button
            onClick={testAPI}
            disabled={testing}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
          >
            {testing ? "Testing..." : "Test API Endpoints"}
          </button>

          {apiTest && (
            <pre className="text-sm overflow-auto">
              {JSON.stringify(apiTest, null, 2)}
            </pre>
          )}
        </div>

        {/* Error Logging Test */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Error Logging Test</h2>
          <button
            onClick={sendTestLog}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Send Test Log
          </button>
          <p className="text-sm text-gray-600 mt-2">
            This will send a test log to the error logging endpoint. Check
            Vercel function logs to see if it appears.
          </p>
        </div>

        {/* Console Logs */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Console Logs</h2>
          <p className="text-sm text-gray-600">
            Open your browser's developer tools (F12) to see console logs in
            real-time. All API requests and errors are logged to the console.
          </p>
        </div>
      </div>
    </div>
  );
}
