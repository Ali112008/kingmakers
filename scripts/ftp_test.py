import ftplib, os, time

FTP_HOST = "142.4.198.208"
FTP_PORT = 21
FTP_USER = "king@kingmakerscb.com"
FTP_PASS = "Kingmakers123$"

def main():
    print(f"Connecting...")
    ftp = ftplib.FTP()
    ftp.connect(FTP_HOST, FTP_PORT, timeout=60)
    ftp.login(FTP_USER, FTP_PASS)
    print(f"Logged in: {ftp.getwelcome()}")

    # Check current directory
    print(f"PWD: {ftp.pwd()}")
    
    # List files
    print("\nRoot listing:")
    try:
        for f in ftp.nlst():
            print(f"  {f}")
    except Exception as e:
        print(f"  (empty or error: {e})")

    # Check public_html
    print("\npublic_html listing:")
    try:
        for f in ftp.nlst('public_html'):
            print(f"  {f}")
    except Exception as e:
        print(f"  (empty or error: {e})")

    # Try to cwd into public_html
    try:
        ftp.cwd('public_html')
        print(f"\nChanged to public_html, PWD: {ftp.pwd()}")
    except ftplib.error_perm as e:
        print(f"\nCannot access public_html: {e}")

    # Try uploading a small test file
    test_content = b"<html><body>Test Upload</body></html>"
    test_file = "/tmp/test_upload.html"
    with open(test_file, 'wb') as f:
        f.write(test_content)
    
    print("\nTrying to upload test file...")
    try:
        with open(test_file, 'rb') as f:
            ftp.storbinary('STOR test.html', f, blocksize=8192)
        print("Upload SUCCESS!")
        # Delete test file
        ftp.delete('test.html')
        print("Test file deleted.")
    except Exception as e:
        print(f"Upload failed: {e}")

    ftp.quit()
    print("\nDone.")

if __name__ == "__main__":
    main()
