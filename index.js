
// 64 Sample Signal
var signal = [1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0,
              1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0,
              1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0,
              1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0];
              
console.log("Loading Modules...");

   
if (false)
{
   var MFCC = require('mfcc');
   var fft = require('fft');

   // Get our 32 complex FFT Phasors
   var phasors = fft.fft(signal);

   // Get our 32 frequency magnitudes
   var mags = fft.util.fftMag(phasors);

   // Construct an MFCC with the characteristics we desire
   var mfcc = MFCC.construct(32,    // Number of expected FFT magnitudes
                             20,    // Number of Mel filter banks
                             300,   // Low frequency cutoff
                             3500,  // High frequency cutoff
                             8000); // Sample Rate (8khz)

   // Run our MFCC on the FFT magnitudes
   var coef = mfcc(mags);

   console.log(coef);
}
