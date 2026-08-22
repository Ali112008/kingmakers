#!/bin/bash
# FTP Upload Script using curl
# Usage: bash ftp_upload.sh

FTP_URL="ftp://king%40kingmakerscb.com:Kingmakers123%24@142.4.198.208"
LOCAL_DIR="/home/z/my-project/out"
REMOTE_BASE="public_html"

upload_file() {
    local local_path="$1"
    local remote_path="$2"
    echo "  UP: $remote_path"
    curl -s --connect-timeout 15 --max-time 120 -T "$local_path" "${FTP_URL}/${remote_path}" 2>&1
    if [ $? -ne 0 ]; then
        echo "  FAIL: $remote_path"
        return 1
    fi
    return 0
}

create_dir() {
    local remote_path="$1"
    echo "  DIR: $remote_path"
    # Try to create directory, ignore error if exists
    curl -s --connect-timeout 10 --max-time 20 -Q "-MKD ${remote_path}" "${FTP_URL}/" 2>/dev/null
}

# Recursively upload directory
upload_dir() {
    local local_path="$1"
    local remote_path="$2"

    for item in "$local_path"/*; do
        [ -e "$item" ] || continue
        local name=$(basename "$item")
        local full_remote="${remote_path}/${name}"

        if [ -d "$item" ]; then
            create_dir "$full_remote"
            upload_dir "$item" "$full_remote"
        else
            upload_file "$item" "$full_remote"
        fi
    done
}

# Also handle hidden files (like .htaccess)
upload_hidden() {
    local local_path="$1"
    local remote_path="$2"

    for item in "$local_path"/.*; do
        [ -f "$item" ] || continue
        local name=$(basename "$item")
        [ "$name" = "." ] || [ "$name" = ".." ] && continue
        upload_file "$item" "${remote_path}/${name}"
    done
}

echo "=== FTP Upload Starting ==="
echo "From: $LOCAL_DIR"
echo "To: ${FTP_URL}/${REMOTE_BASE}/"
echo ""

# Create base directory
create_dir "$REMOTE_BASE"

# Upload all files
upload_dir "$LOCAL_DIR" "$REMOTE_BASE"

# Upload hidden files
upload_hidden "$LOCAL_DIR" "$REMOTE_BASE"

echo ""
echo "=== Upload Complete ==="
