/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig*/

module.exports = {
  env: {
      MONGO_URI: "mongodb+srv://mamadiouf:Salathiam8@cluster0.tevucyz.mongodb.net/?retryWrites=true&w=majority"
  }
}
