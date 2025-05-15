# BRIDGE - Better Research via Inclusive Design-Driven Guided Experiences

We want to bring UI/UX-first design principles to the RSE community.

## Project Description

Accessibility and inclusive design are very important for software design. We want to help RSEs incorporate inclusive design principles and prototyping practices earlier into their development processes by encouraging the use of UI/UX-first design principle.

## Software Requirements

This repository provides the website for the project.
To spin this up locally you will need [Docker](https://docs.docker.com/engine/install/).

## Installation and Local Hosting Instructions
Git clone this repository

In ``bridge-hack-day/`` , build locally using docker:
```
docker build -t uiuxpage . --platform=linux/amd64
```

Then spin up the docker server using:
```
docker run -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public uiuxpage
```

OR:

```
docker run -d -p 3000:3000 -v ./website/pages:/app/pages -v ./website/public:/app/public --cidfile uiux_id.txt uiuxpage
```
and to shutdown the container afterwards:
```
docker container stop $(cat uiux_id.txt) && rm uiux_id.txt
```

To access locally hosted webpages use the address `localhost:3000`.


## Contribution Guidelines

To add/edit content, do so with Markdown files in `website/pages/...`

The website is built using [Nextra](https://nextra.site/docs).

## Citation Guidance

If you want to help others to properly cite your project, you can creation a citation file. This can be done using the `create new file` button on the repository page, and entering the file name `CITATION.cff`. Github will create a template file for you, which you can fill out following the [Turing Way Citation guidance](https://book.the-turing-way.org/communication/citable/citable-cff).

## Licence

Copyright 2025 Eli Chadwick, Zeynep AKI, Jim Gardner, Douglas Lowe, 

Content licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).
