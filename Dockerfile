FROM php:8.4-fpm

WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    nodejs \
    npm \
    netcat-traditional \
    libbz2-dev \
    libicu-dev \
    libxslt-dev \
    imagemagick \
    libmagickwand-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libwebp-dev

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions with proper GD configuration
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
    --with-webp

RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    zip \
    bz2 \
    intl \
    xsl

# Install Imagick (PECL)
RUN pecl install imagick \
    && docker-php-ext-enable imagick

# Add composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Fix: Git "dubious ownership" issue
RUN git config --global --add safe.directory /var/www/html

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Copy application files
COPY . /var/www/html

# Install PHP dependencies
RUN composer install --no-interaction --no-plugins --no-scripts

# Install and build frontend assets
RUN npm install && npm run build

EXPOSE 9000

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["php-fpm"]