import ftplib, os, sys

FTP_HOST = "142.4.198.208"
FTP_PORT = 21
FTP_USER = "king@kingmakerscb.com"
FTP_PASS = "Kingmakers123$"
LOCAL_DIR = "/home/z/my-project/out"
REMOTE_DIR = "public_html"

def ensure_remote_dir(ftp, path):
    """Create remote directory if it doesn't exist."""
    parts = path.strip('/').split('/')
    for i in range(len(parts)):
        dir_path = '/'.join(parts[:i+1])
        try:
            ftp.cwd(dir_path)
        except ftplib.error_perm:
            try:
                ftp.mkd(dir_path)
            except:
                pass
            try:
                ftp.cwd(dir_path)
            except:
                pass
    ftp.cwd('/')

def upload_dir(ftp, local_path, remote_path):
    """Recursively upload a directory."""
    ensure_remote_dir(ftp, remote_path)
    ftp.cwd(remote_path)

    for item in os.listdir(local_path):
        local_item = os.path.join(local_path, item)
        remote_item = item

        if os.path.isfile(local_item):
            print(f"  UP: {remote_path}/{remote_item}")
            with open(local_item, "rb") as f:
                ftp.storbinary(f"STOR {remote_item}", f)
        elif os.path.isdir(local_item):
            print(f"  DIR: {remote_path}/{remote_item}/")
            upload_dir(ftp, local_item, f"{remote_path}/{remote_item}")
            ftp.cwd("..")

    ftp.cwd("/")

def main():
    print(f"Connecting to {FTP_HOST}:{FTP_PORT}...")
    ftp = ftplib.FTP()
    ftp.connect(FTP_HOST, FTP_PORT, timeout=30)
    ftp.login(FTP_USER, FTP_PASS)
    ftp.set_pasv(True)
    print(f"Logged in. Welcome: {ftp.getwelcome()}")

    # Upload all files
    print(f"\nUploading from {LOCAL_DIR} to {REMOTE_DIR}/...")
    upload_dir(ftp, LOCAL_DIR, REMOTE_DIR)

    ftp.quit()
    print("\nDone! Upload complete.")

if __name__ == "__main__":
    main()
