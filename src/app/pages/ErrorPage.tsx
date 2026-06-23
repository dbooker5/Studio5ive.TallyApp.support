import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { AlertTriangle, FileQuestion, ArrowLeft, Home } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  
  let title = "Oops! Something went wrong";
  let description = "We encountered an unexpected error while processing your request.";
  let Icon = AlertTriangle;
  let statusCode = "500";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page Not Found";
      description = "The page you are looking for doesn't exist or has been moved.";
      Icon = FileQuestion;
      statusCode = "404";
    } else {
      title = error.statusText || "Error";
      description = error.data?.message || "An unexpected error occurred.";
      statusCode = error.status.toString();
    }
  } else if (error instanceof Error) {
    description = error.message;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}>
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22D3EE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ec4899]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#22D3EE]/20 to-[#ec4899]/20 rounded-3xl flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
          <Icon className="w-12 h-12 text-[#22D3EE]" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 tracking-tighter">
          {statusCode}
        </h1>
        
        <h2 className="text-3xl font-bold mb-4 text-white">
          {title}
        </h2>
        
        <p className="text-[#A1A1AA] text-lg mb-10 max-w-md mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 bg-[#22D3EE] text-black rounded-xl font-medium hover:bg-[#22D3EE]/90 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-medium border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Display detailed error in development/for debugging if not a 404 */}
        {error && !isRouteErrorResponse(error) ? (
          <div className="mt-12 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-left w-full max-w-full overflow-auto backdrop-blur-sm">
            <p className="text-red-400 font-mono text-sm">
              {error instanceof Error ? error.stack : JSON.stringify(error)}
            </p>
          </div>
        ) : null}
      </div>
      
      {/* Decorative dots grid at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mask-image:linear-gradient(to_bottom,transparent,black)" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' }} />
    </div>
  );
}
