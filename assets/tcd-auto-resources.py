"""
the goal of this script is to automate the proccess of adding or editing the resources 
cards to avoid mistakes in : name(card-header), logo(logos),link(href).

https://thectfdude.github.io/TCD - By 0xRar
"""

print('Categories [generel, web, reverse, forensics]')
print('Logos: [github, youtube, website]')

card_header = input('Enter card header(name): ')
logo = input('Enter the logo(platform type): ')
category = input('Enter card category: ')
resource = input('Enter the resource url: ')

logos = ['fa-youtube', 'fa-github', 'fa-window-maximize']

logo_div = ''

if logo == 'youtube':
    logo_div = logos[0]

elif logo == 'github':
    logo_div  = logos[1]

elif logo == 'website':
    logo_div = logos[2]


card = f"""
<div class="card text-dark mb-3" style="max-width: 18rem;">
              <div class="card-header">./{card_header}</div>
              <div class="logos fa {logo_div} fa-lg"></div>
              <div class="card-body"> 
                <h5 class="card-title">Category: #{category.lower()}</h5>
                <p class="card-text"></p> 
                <a target="_blank" href="{resource}">Link</a> 
              </div>
            </div> 
"""

print(card)
