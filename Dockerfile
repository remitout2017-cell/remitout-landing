# ==============================
# Stage 1: Build the Next.js app
# ==============================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the code
COPY . .

# Increase Node memory limit during build
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm run build

# ==============================
# Stage 2: Run the production app
# ==============================
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=${PORT:-3000}

# Expose the port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
