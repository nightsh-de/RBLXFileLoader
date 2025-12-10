local url = "http://127.0.0.1:9808" 
--// Again, if you change port, dont forget to change it here
local filename='hi'

local success, resp = pcall(function()
	return game:GetService("HttpService"):GetAsync(url, false, {["file"] = filename})
end)

if not success then
	warn("HTTP failed:", resp)
	return
end

print("Raw response:", resp)

local mod, err = loadstring(resp)
if not mod then
	warn("Failed to load code:", err)
	return
end

local a:any= mod().hello() 
--// Also this can be changed to anything, i was just testing some stuff.

if a~=nil then
	print(a)
--// Just some more testing here too
end

