import mechanize
br = mechanize.Browser()
br.set_handle_robots(False)
br.addheaders = [("User-agent","Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.13) Gecko/20101206 Ubuntu/10.10 (maverick) Firefox/3.6.13")] 
sign_in = br.open("http://automationpractice.com/index.php?controller=authentication&back=my-account")
list(br.forms())[1]
br["email"] = "nishant.selenium@gmail.com"
br["passwd"] = "Nikun"
logged_in = br.submit()
logincheck = logged_in.read()
print logincheck
